import React, {RefObject, KeyboardEvent, useEffect} from "react";
import classNames from 'classnames';

interface InputProps {
    inputRef: RefObject<HTMLInputElement>;
    inputText: string;
    executing: boolean;
    onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
    error: boolean;
}

const TerminalInput: React.FC<InputProps> = ({ inputRef, inputText, executing, onKeyPress, error }) => {
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef]);
    const inputClasses = classNames(
        'text-white leading-10 flex gap-2 flex-wrap focus:outline-none whitespace-nowrap caret-transparent',
        {
            'animate-shake': error
        }
    )

    return (
        <div className="relative group/input flex items-center overflow-x-scroll no-scrollbar pr-[10px]">
            <div
                className={inputClasses}
            >
                {inputText}
            </div>
            <div className="hidden group-has-[:focus]/input:block bg-white w-[10px] h-[21px] shrink-0 animate-blink">
            </div>
            <input
                type="text"
                className="hidden-input"
                ref={inputRef}
                value=""
                onKeyDown={onKeyPress}
                onChange={() => {
                }} // Prevent React warning
                disabled={executing || error}
            />
        </div>
    )
}

export default TerminalInput;
