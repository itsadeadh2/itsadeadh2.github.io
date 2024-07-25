import React, {useEffect, useState} from "react";
import TerminalRow from "../components/TerminalRow";
import Terminal from "../components/Terminal";
import LinkMessage from "../components/LinkMessage";
import {Link} from "react-router-dom";

function AboutPage() {
    const [history, setHistory] = useState<React.ReactElement[]>([]);
    const currentAge = new Date().getFullYear() - new Date('1997-05-07').getFullYear()
    const experienceYears = new Date().getFullYear() - new Date('2017-03-07').getFullYear()
    const rowsClass = "max-w-xl leading-10"
    useEffect(() => {
        const initialHistory = [
            (
                <TerminalRow rowNumber={1} className={rowsClass}>
                    <span className="text-white">who are you?</span>
                    <span className="w-full">
                        # My name is <span className="text-white">Thiago Barbosa, </span>
                        I am {currentAge} years old, live In Brazil
                        and I have been working as senior software developer
                        for the past <span className="text-white">{experienceYears} years</span> of experience.
                        I am also a husband for a beautiful woman called <span className="text-pink-400 italic">Bruna</span> and dad to the brightest spot in my sky: my daughter <span className="text-yellow-400 italic">Luna</span>.
                    </span>
                </TerminalRow>
            ), (
                <TerminalRow rowNumber={2} className={rowsClass}>
                    <p className="text-white">what do you do?</p>
                    <span className="w-full">
                        # As a fullstack web developer, I help people bring their solutions from their minds onto the real
                        world using the best development practices and most up-to-date solutions.
                    </span>
                </TerminalRow>
            ), (
                <TerminalRow rowNumber={3} className={rowsClass}>
                    <p className="text-white">which technologies do you use?</p>
                    <span className="w-full">
                        languages {'->'} Python, JavaScript, TypeScript, Go <br/>
                        backend {'->'} Flask, Django, Express <br/>
                        frontend {'->'} React, Angular2, Vue <br/>
                        devops {'->'} AWS, Docker, CI/CD, IaC <br/>
                    </span>
                </TerminalRow>
            ), (
                <TerminalRow rowNumber={4} className={rowsClass}>
                    <p className="text-white">which skills do you have?</p>
                    <span className="w-full">
                        design/architecture of high-availability systems <br/>
                        containerization <br/>
                        microservices<br/>
                        TDD (Test Driven Development) <br/>
                        refactoring and maintaining large codebases <br/>
                        proficient in english <br/>
                    </span>
                </TerminalRow>
            ), (
                <TerminalRow rowNumber={4} className={rowsClass}>
                    <p className="text-white">do you have any hobbies?</p>
                    <span className="w-full">
                        # I like to play video games, create pet projects like this one,
                        configure emulators to barely play, build mini-itx pc's, develop small games, and whenever I'm bored
                        I watch <LinkMessage link={'https://www.imdb.com/title/tt0118375/'} text="the best show in the world"/>
                    </span>
                </TerminalRow>
            ), (
                <TerminalRow rowNumber={4} className={rowsClass}>
                    <p className="text-white">are you available to work?</p>
                    <span className="w-full">
                        <Link to={'/'}>
                            <LinkMessage link={'#'} text="# yes"/>
                        </Link>
                    </span>
                </TerminalRow>
            )
        ]
        setHistory(initialHistory)
    }, [currentAge, experienceYears])


    return (
        <Terminal rows={history}/>
    )
}

export default AboutPage;
