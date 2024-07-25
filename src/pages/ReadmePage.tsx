import React, {useEffect, useState} from "react";
import TerminalRow from "../components/TerminalRow";
import Terminal from "../components/Terminal";
import LinkMessage from "../components/LinkMessage";

function ReadmePage() {
    const [history, setHistory] = useState<React.ReactElement[]>([]);
    const currentAge = new Date().getFullYear() - new Date('1997-05-07').getFullYear()
    const experienceYears = new Date().getFullYear() - new Date('2017-03-07').getFullYear()
    const rowsClass = ""
    useEffect(() => {
        const initialHistory = [
            (
                <TerminalRow rowNumber={1} className={rowsClass}>
                    <span className="text-white">history of this project:</span>
                    # This project started out a very long time ago, when I had the idea of creating a terminal-like landing page.
                    it was way simpler initially, being composed of some raw CSS, HTML and JavaScript files
                </TerminalRow>
            ),
        ]
        setHistory(initialHistory)
    }, [currentAge, experienceYears])


    return (
        <Terminal rows={history}/>
    )
}

export default ReadmePage;
