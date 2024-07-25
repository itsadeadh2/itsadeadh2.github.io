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
                    <p className="text-white">history of this project:</p>
                    # This project started out a very long time ago, when I had the idea of creating a terminal-like landing page.
                    it was way simpler initially, being composed of some raw CSS, HTML and JavaScript files.
                    <LinkMessage link="https://github.com/itsadeadh2/itsadeadh2.github.io/tree/og" text={"check it out here"}/>
                    a few years after creating the first version, I ended up creating another updated version of it that looks like a Commodore 64 terminal.
                    <LinkMessage link="https://commodore.itsadeadh2.com" text={"commodore version"}/>
                    the commodore version was really fun to work on, and I was really proud of the end result, but the
                    user experience wasn't very welcoming (specially for non-tech people).
                    So I ended up updating it again to the version you're seeing now. Which still keeps the original intent, but is a lot easier to interact with.
                </TerminalRow>
            ),
            (
                <TerminalRow rowNumber={1} className={rowsClass}>
                    <p className="text-white">you stole this from @theprimeagen</p>
                    # i'm good at many things, but ui design is not one of them. so yeah, when I saw the terminal.shop project from
                    @theprimeagen I fell in love. I did copy almost all of his styling and layout, but I implemented
                    everything myself using react. I plan on changing some things on the project soon, but in the mean-time
                    I hope I don't get sued.
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
