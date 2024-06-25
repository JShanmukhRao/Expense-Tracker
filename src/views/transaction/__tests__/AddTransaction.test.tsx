import { render } from "@testing-library/react";
import AddTransaction from "../AddTransaction";

describe('Transaction Detail Component', () => {

    test('Render properly', () => {
        render(<AddTransaction />);
    })
});