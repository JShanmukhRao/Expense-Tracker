import React from "react";

export interface InputProps {
    config: {
        placeholder: string;
    }
}

const Input = ({ config }: InputProps) => {

    return (
        <div>
            <input />
        </div>
    );
}
export default Input;