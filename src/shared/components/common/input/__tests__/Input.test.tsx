import { render } from "@testing-library/react";
import Input, { InputProps } from "../Input";

const inputProps: InputProps = {
    config: {
        placeholder: 'Select Option'
    }

}

describe('Input Component', () => {


    test('Render properly', () => {
        render(<Input config={inputProps.config} />);
    })
});