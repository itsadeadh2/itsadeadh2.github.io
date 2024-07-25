import {GoX} from "react-icons/go";
import React from "react";

interface LoadingProps {
    loadingMessage?: string;
}

const LoadingMessage: React.FC<LoadingProps> = ({loadingMessage}) => {
    return (
        <>
            <GoX className="w-4 h-4 self-center text-red" />
            # {loadingMessage}
        </>
    )
}

export default LoadingMessage;