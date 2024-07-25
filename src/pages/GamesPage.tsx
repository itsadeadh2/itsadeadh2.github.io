import React, {useEffect, useState} from "react";
import TerminalRow from "../components/TerminalRow";
import Terminal from "../components/Terminal";
import LinkMessage from "../components/LinkMessage";

function GamesPage() {
    const [history, setHistory] = useState<React.ReactElement[]>([]);
    const currentAge = new Date().getFullYear() - new Date('1997-05-07').getFullYear()
    const experienceYears = new Date().getFullYear() - new Date('2017-03-07').getFullYear()
    const rowsClass = ""
    useEffect(() => {
        const initialHistory = [
            (
                <TerminalRow rowNumber={1} className={rowsClass}>
                    # games are not available in here yet but you can still check them out in the older version of this page:
                </TerminalRow>
            ),(
                <TerminalRow rowNumber={2} className={rowsClass}>
                    <LinkMessage link="https://commodore.itsadeadh2.com" text={"access the old version"}/>
                </TerminalRow>
            ), (
                <TerminalRow rowNumber={3} className={rowsClass}>
                    type <span className="text-white">
                        hangman
                    </span> in the terminal
                </TerminalRow>
            ),(
                <TerminalRow rowNumber={3} className={rowsClass}>
                    have fun :)
                </TerminalRow>
            )

        ]
        setHistory(initialHistory)
    }, [currentAge, experienceYears])


    return (
        <Terminal rows={history}/>
    )
}

export default GamesPage;
