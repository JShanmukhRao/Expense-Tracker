import { render } from "@testing-library/react";
import Dropdown, { DropdownProps } from "../Dropdown";

const dropdownProps: DropdownProps = {
    config: {
        placeholder: 'Select Option',
        options: [
            {
                key: 'GROCERIES',
                value: 'Groceries'
            },
            {
                key: 'ENTERTAINMENT',
                value: 'Entertainment'
            }
        ]
    }

}

describe('Dropdown Component', () => {

   
    test('Render properly', () => {
        render(<Dropdown config={dropdownProps.config}/>);
    })
});