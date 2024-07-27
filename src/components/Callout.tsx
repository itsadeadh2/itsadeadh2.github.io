import React, {HTMLAttributes} from "react";
import classNames from 'classnames';


const Callout: React.FC<HTMLAttributes<HTMLDivElement>> = ({children, className}) => {
    const calloutClasses = classNames(
        "h-8 flex items-center bg-emerald-500 text-sm group-data-[terminalhq=closed]:hidden",
        className
    )
    return (
        <div className={calloutClasses}>
            {children}
        </div>
    )
}

export default Callout;