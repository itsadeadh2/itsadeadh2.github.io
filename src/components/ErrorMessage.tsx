import {GoX} from "react-icons/go";
import React from "react";

interface ErrorProps {
    errorMessage?: string;
}

const ErrorMessage: React.FC<ErrorProps> = ({errorMessage}) => {
    return (
        <>
            <GoX className="w-4 h-4 self-center text-red" />
            # {errorMessage}
        </>
    )
}

export default ErrorMessage;