import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, active, className,  ...rest }) => {
    const buttonClasses = classNames(
        'text-gray-11 h-full focus:bg-gray-6 focus:outline-none hover:bg-gray-5 active:bg-gray-6 px-4 flex items-center last:!border-r',
        className,
        active ? '!text-white': null
    );
    return <button className={buttonClasses} {...rest}>{children}</button>;
};

export default Button;
