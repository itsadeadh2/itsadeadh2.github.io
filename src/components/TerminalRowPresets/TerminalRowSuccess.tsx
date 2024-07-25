import TerminalRow from "../TerminalRow";
import React from "react";
import {GoCheck} from "react-icons/go";

interface RowProps {
    terminalContent: string;
    successMessage: string;
    rowNumber?: number;
}

const TerminalRowSuccess: React.FC<RowProps> = ({terminalContent, successMessage, rowNumber}) => {
    return (
        <TerminalRow rowNumber={rowNumber} success={true}>
            <span className="text-white">
                {terminalContent}
            </span>
            <GoCheck className="w-4 h-4 self-center text-green-11"/>
            # {successMessage}
        </TerminalRow>
    )
}

export default TerminalRowSuccess;