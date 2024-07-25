import React, {createRef, KeyboardEvent, useCallback, useEffect, useState} from "react";
import TerminalRow from "../components/TerminalRow";
import Terminal from "../components/Terminal";
import TerminalInput from "../components/TerminalInput";
import LoadingMessage from "../components/LoadingMessage";
import ErrorMessage from "../components/ErrorMessage";
import ProjectsApi from "../clients/projectsApi";
import LinkMessage from "../components/LinkMessage";
import InputHandler from "../hooks/inputHandler";
import TriggerError from "../hooks/triggerError";

enum ELanguages {
    node = 'node',
    python = 'python',
    bash = 'bash'
}

function ProjectsPage() {
    const projectsApi = new ProjectsApi();
    const [history, setHistory] = useState<React.ReactElement[]>([]);
    const rowsClass = ""
    const inputRef = createRef<HTMLInputElement>();
    const [inputText, setInputText] = useState("");
    const [executing, setExecuting] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const defaultHistory = useCallback(
        () => {
            return [
                (
                    <TerminalRow rowNumber={1} className={rowsClass}>
                    <span className="w-full">
                        # In this page you can find links for all of my relevant projects.
                        Type one of the languages bellow to see projects made using it:
                    </span>
                    </TerminalRow>
                ), (
                    <TerminalRow rowNumber={2} className={rowsClass}>
                    <span className="text-white">
                        {ELanguages.python}
                    </span>
                    </TerminalRow>
                ),
                (
                    <TerminalRow rowNumber={3} className={rowsClass}>
                    <span className="text-white">
                        {ELanguages.node}
                    </span>
                    </TerminalRow>
                ),
                (
                    <TerminalRow rowNumber={4} className={rowsClass}>
                    <span className="text-white">
                        {ELanguages.bash}
                    </span>
                    </TerminalRow>
                ),
            ]
        },
        []
    )

    useEffect(() => {
        setHistory(defaultHistory())
    }, [defaultHistory])

    const handleKeyPress = async (event: KeyboardEvent<HTMLInputElement>) => {
        await InputHandler(event, executing, executeProjectsRetrieval, inputText, setInputText);
    }

    const isValidOption = (email: string): boolean => {
        const normalizedEmail = email.toLowerCase().trim() as ELanguages
        return [ELanguages.bash, ELanguages.node, ELanguages.python].includes(normalizedEmail)
    }

    const executeProjectsRetrieval = async (email: string) => {
        setExecuting(true);
        if (!isValidOption(email)) {
            setExecuting(false)
            TriggerError("Invalid option.", setError, setErrorMessage)
            return
        }
        const projects = await projectsApi.getProjects(email);
        if (projects) {
            const elements = projects.map((project, i) => {
                return (
                    <TerminalRow rowNumber={history.length + 1 + i} className={rowsClass}>
                        <LinkMessage link={project.github_link} text={project.name}/> #{project.description}
                    </TerminalRow>
                )
            })
            setHistory([...defaultHistory(), ...elements])
            setExecuting(false);
            setInputText('')
            return;
        } else if (!projects) {
            setExecuting(false)
            TriggerError("There was an error. Please try again later.", setError, setErrorMessage)
            return;
        }
    }

    const renderedInput = (
        <TerminalRow rowNumber={history.length + 1} onClick={() => inputRef.current?.focus()} attention={executing}
                     failure={error}>
            <TerminalInput
                inputRef={inputRef}
                inputText={inputText}
                executing={executing}
                onKeyPress={handleKeyPress}
                error={error}
            ></TerminalInput>
            {executing && <LoadingMessage loadingMessage="Please wait..."/>}
            {error && <ErrorMessage errorMessage={errorMessage}/>}
        </TerminalRow>
    )


    return (
        <Terminal rows={history} input={renderedInput}/>
    )
}

export default ProjectsPage;
