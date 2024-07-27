import React, {HTMLAttributes} from "react";
import classNames from 'classnames';

interface RowProps extends HTMLAttributes<HTMLDivElement> {
    highlight?: boolean,
    rowNumber?: number,
    success?: boolean,
    failure?: boolean,
    attention?: boolean
}

const TerminalRow: React.FC<RowProps> = ({
                                             rowNumber,
                                             children,
                                             highlight,
                                             className,
                                             ...rest
}) =>{
    const rowClasses = classNames(
        "group flex items-center text-gray-10 hover:bg-gray-5 px-6 active:border-emerald-500 active:border-l-2 active:pl-[22px] active:text-gray-11 active:bg-gray-6 focus:border-emerald-500 focus:border-l-2 focus:pl-[22px] focus:text-gray-11 focus:bg-gray-6 focus:outline-none has-[:focus]:border-emerald-500 has-[:focus]:border-l-2 has-[:focus]:pl-[22px] has-[:focus]:text-gray-11 has-[:focus]:bg-gray-6 has-[:focus]:outline-none", {
            '!bg-green-5': rest.success,
            '!bg-red-5': rest.failure,
            '!bg-blue-5': rest.attention
        },
        className
    )
    return (
        <div
            className={rowClasses}
            {...rest}
        >
            <div className="text-center pr-10 self-start">{rowNumber}</div>
            <span className="leading-10 flex gap-2 flex-wrap">
                {children}
            </span>
        </div>
)
}

export default TerminalRow;
