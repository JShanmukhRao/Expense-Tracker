import React from "react";

export interface Option {
    key: string,
    value: string
}
export interface DropdownProps {
    config: {
        placeholder: string;
        options: Array<Option>;
    }
}
const Dropdown = ({ config }: DropdownProps) => {

    return (
        <div>

        </div>
    );
}
export default Dropdown;