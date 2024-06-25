import { render } from "@testing-library/react";
import Transactions from "../Transactions";


describe('Transactions Component', () => {


    test('Render properly', () => {
        render(<Transactions  />);
    })
});