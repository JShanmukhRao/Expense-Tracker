import { render } from "@testing-library/react";
import TransactionDetails from "../TransactionDetail";

describe('Transaction Detail Component',()=>{

    test('Render properly',()=>{
        render(<TransactionDetails/>);
    })
});