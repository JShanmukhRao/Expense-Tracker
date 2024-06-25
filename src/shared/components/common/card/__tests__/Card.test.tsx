import { render, screen } from "@testing-library/react"
import Card from "../Card"
import { transformCreateDate } from "../../../../../services/Utils";



describe('Card Component',()=>{
    const cardItem = {
        name: 'July Tracker',
        description: 'Used for july month budget',
        createdAt: '2021-01-01T00:00:00.000Z'
    }
    test('Render without crashing',()=>{
        render(<Card cardItem={cardItem} /> )
    });

    test('Displaying all props correctly', () => {
        render(<Card cardItem={cardItem} />);

        expect(screen.getByText(cardItem.name)).toBeInTheDocument();
        expect(screen.getByText(cardItem.description)).toBeInTheDocument();
        const formattedDate = `Created At: ${transformCreateDate(cardItem.createdAt)}`;
        expect(screen.getByText(formattedDate)).toBeInTheDocument();
    });

})