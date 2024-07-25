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
                    <p className="text-white">History of this project:</p>
                    # This project started a very long time ago when I had the idea of creating a terminal-like landing page.
                    It was way simpler initially, being composed of some raw CSS, HTML, and JavaScript files.
                    <LinkMessage link="https://github.com/itsadeadh2/itsadeadh2.github.io/tree/og" text={"check it out here"}/>
                    A few years after creating the first version, I ended up creating another updated version of it that looks like a Commodore 64 terminal.
                    <LinkMessage link="https://commodore.itsadeadh2.com" text={"commodore version"}/>
                    The Commodore version was really fun to work on, and I was really proud of the end result, but the
                    user experience wasn't very welcoming (especially for non-tech people).
                    So I ended up updating it again to the version you're seeing now, which still keeps the original intent but is a lot easier to interact with.
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
