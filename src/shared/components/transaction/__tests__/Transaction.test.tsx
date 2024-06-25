import { render, screen } from "@testing-library/react";
import Transaction from "../Transaction";
import React from "react";
import { PaymentMethod, TransactionCategory, TransactionType } from "../../../enums/Transaction";
import { transformCreateDate } from "../../../../services/Utils";


const transaction ={
    id:'1',
    createdAt: '2021-01-01T00:00:00.000Z',
    amount: 100,
    description: 'need for maggi',
    category: TransactionCategory.GROCERIES,
    type: TransactionType.EXPENSE,
    paymentMethod: PaymentMethod.CASH
}
describe('Transaction Component',()=>{
    
    test('Render without crashing',async()=>{
        await React.act(async () => {
            render(
                <Transaction transaction={transaction} />
            );
        });
    });

    test('Transaction props render properly', async () => {
        render(<Transaction transaction={transaction} />);
    });

    test('Renders without crashing', () => {
        render(<Transaction transaction={transaction} />);
    });

    test('Displays transaction category', () => {
        render(<Transaction transaction={transaction} />);
        expect(screen.getByText(transaction.category)).toBeInTheDocument();
    });

    test('Displays transaction description', () => {
        render(<Transaction transaction={transaction} />);
        expect(screen.getByText(transaction.description)).toBeInTheDocument();
    });

    test('Displays transaction amount', () => {
        render(<Transaction transaction={transaction} />);
        expect(screen.getByText(transaction.amount.toString())).toBeInTheDocument();
    });

    test('Displays transformed creation date', () => {
        render(<Transaction transaction={transaction} />);
        const formattedDate = transformCreateDate(transaction.createdAt);
        expect(screen.getByText(formattedDate)).toBeInTheDocument();
    });
});