import React, {createRef, KeyboardEvent, useEffect, useState} from "react";
import TerminalRow from "../components/TerminalRow";
import TerminalInput from "../components/TerminalInput";
import Terminal from "../components/Terminal";
import TerminalRowSuccess from "../components/TerminalRowPresets/TerminalRowSuccess";
import ErrorMessage from "../components/ErrorMessage";
import LoadingMessage from "../components/LoadingMessage";
import LinkMessage from "../components/LinkMessage";
import ContactApi from "../clients/contactApi";

function ContactPage() {
    const contactApi = new ContactApi();
    const inputRef = createRef<HTMLInputElement>();
    const [inputText, setInputText] = useState("");
    const [executing, setExecuting] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [history, setHistory] = useState<React.ReactElement[]>([]);

    useEffect(() => {
        const initialHistory = [
            (
                <TerminalRow rowNumber={1}>
                    # hi, and welcome to my website!
                </TerminalRow>
            ),
            (
                <TerminalRow rowNumber={2}>
                    # here's some useful links for you:
                </TerminalRow>
            ),
            (
                <TerminalRow rowNumber={3}>
                    <LinkMessage link={'https://resume.itsadeadh2.com'} text={'resume'}/>
                </TerminalRow>
            ),
            (
                <TerminalRow rowNumber={4}>
                    <LinkMessage link={'https://api.whatsapp.com/send?phone=5569992219034'} text={'personal whatsapp'}/>
                </TerminalRow>
            ),
            (
                <TerminalRow rowNumber={5}>
                    <LinkMessage link={'mailto:itsadeadh2@gmail.com'} text={'personal e-mail'}/>
                </TerminalRow>
            ),(
                <TerminalRow rowNumber={5}>
                    <LinkMessage link={'https://www.linkedin.com/in/barbosathiagodev/'} text={'linkedin'}/>
                </TerminalRow>
            ),
            (
                <TerminalRow rowNumber={2}>
                    # you can also provide your email down bellow and receive the info above at your inbox
                </TerminalRow>
            ),
        ]
        setHistory(initialHistory)
    }, [])

    const handleKeyPress = async (event: KeyboardEvent<HTMLInputElement>) => {
        const {key} = event;
        if (key === 'Enter') {
            if (executing) {
                event.preventDefault();
                return;
            }
            await executeEmailSubmission(inputText);
            event.preventDefault();
        } else if (key === 'Backspace') {
            setInputText((prevState) => prevState.slice(0, -1))
            event.preventDefault();
        } else if (key.length === 1) {
            setInputText((prevState) => prevState + key);
            event.preventDefault();
        }

        // Prevent default action for keys we want to handle differently
        if (['Enter', 'Backspace', 'Alt', 'Delete', 'Meta', 'Control', 'Shift'].includes(key)) {
            event.preventDefault();
        }
    }

    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const executeEmailSubmission = async (email: string) => {
        setExecuting(true);
        if (!isValidEmail(email)) {
            setExecuting(false)
            triggerError("Invalid email.")
            return
        }
        const res = await contactApi.requestContactInfo(email);
        if (res) {
            const succesRow = <TerminalRowSuccess rowNumber={history.length + 1} terminalContent={inputText}
                                                  successMessage="done"/>
            setHistory([...history, succesRow])
            setExecuting(false);
            setInputText('')
            return;
        } else if (!res) {
            setExecuting(false)
            triggerError("There was an error. Please try again later.");
            return;
        }
    }

    const triggerError = (message: string) => {
        setError(true);
        setErrorMessage(message);
        setTimeout(() => {
                setError(false);
                setErrorMessage("");
            },
            3500)
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
            {executing && <LoadingMessage loadingMessage="Please wait..."/> }
            {error && <ErrorMessage errorMessage={errorMessage}/>}
        </TerminalRow>
    )

    return (
        <Terminal rows={history} input={renderedInput}/>
    )
}

export default ContactPage;
