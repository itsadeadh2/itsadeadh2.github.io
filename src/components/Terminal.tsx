import React, {Fragment, HTMLAttributes} from 'react';
interface TerminalProps extends HTMLAttributes<HTMLDivElement> {
    rows: React.ReactElement[]
    input?: React.ReactElement
}

const Terminal: React.FC<TerminalProps> = ({rows, input, ...rest}) => {

    const renderedHistory = rows.map((entry, i) => {
        return (
            <Fragment key={i}>
                {entry}
            </Fragment>
        )
    })

    return (
        <main className="relative my-20 grow" {...rest}>
            <div className="leading-10">
                {renderedHistory}
                {input}
            </div>
        </main>
    )
}

export default Terminal;
