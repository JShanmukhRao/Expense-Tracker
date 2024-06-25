import React, { act } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
// import { act } from 'react-dom/test-utils'; // Import act from react-dom/test-utils
import Trackers from '../Trackers';
import { fetchTracker } from '../../../../services/Tracker.service';
import { BrowserRouter } from 'react-router-dom';
import Card from "../../common/card/Card";

// Mock the fetchTracker service
jest.mock('../../../../services/Tracker.service'); // Adjust path as needed
const mockedFetchTracker = fetchTracker as jest.MockedFunction<typeof fetchTracker>;

// Mock Card Component to avoid nested render
jest.mock('../../common/card/Card', () => {
    return {
        __esModule: true,
        default: jest.fn().mockImplementation(props => <div>{props.cardItem.name}</div>)
    };
});
// Mock data
const mockTrackers = [
    {
        id: '1',
        name: 'Tracker 1',
        templateId: 'template1', // Example additional field
        createdAt: '2021-01-01T00:00:00.000Z', // Example formatted date string
        description: 'Description 1',
        segments: [
            {
                id: 'segment1',
                name: 'Segment 1',
                description: 'Segment 1 Description',
                allocatedAmount: 100,
                amount: 50
            }
        ],
        transactions: [
            // Example transactions array
        ]
    },
    {
        id: '2',
        name: 'Tracker 2',
        templateId: 'template2', // Example additional field
        createdAt: '2021-02-01T00:00:00.000Z', // Example formatted date string
        description: 'Description 2',
        segments: [
            {
                id: 'segment2',
                name: 'Segment 2',
                description: 'Segment 2 Description',
                allocatedAmount: 150,
                amount: 75
            }
        ],
        transactions: [
            // Example transactions array
        ]
    }
];

describe('Tracker Component', () => {

    beforeEach(() => {
        mockedFetchTracker.mockResolvedValue(mockTrackers);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Tracker component render proplerly', async () => {
        await React.act(async () => {
            render(<BrowserRouter>
                <Trackers />
            </BrowserRouter>);
        })

        expect(screen.getByText('Trackers')).toBeInTheDocument();
        // renders an <a> tag with correct href
        expect(screen.getByRole('link', { name: 'Tracker 1' })).toHaveAttribute('href', '/tracker/1');
        expect(screen.getByRole('link', { name: 'Tracker 2' })).toHaveAttribute('href', '/tracker/2');
        expect(fetchTracker).toBeCalledTimes(1);
        console.log("TEST1 ENDED")
    });

   

    test('Card Should render twice', async () => {
        await React.act(async () => {
            render(<BrowserRouter>
                <Trackers />
            </BrowserRouter>);
        })


        // Expect the mocked Card component to be called twice
        expect(Card).toHaveBeenCalledTimes(2);

    });

    test('Proper props passed in Card Component', async () => {
        await React.act(async () => {
            render(
                <BrowserRouter>
                    <Trackers />
                </BrowserRouter>
            );
        });    

    //    await waitFor(()=>{

    //     //    expect(Card).toBeCalledWith(
    //     //        expect.objectContaining({
    //     //            cardItem: {
    //     //                name: 'Tracker 1',
    //     //                description: 'Description 1',
    //     //                createdAt: '2021-01-01T00:00:00.000Z'
    //     //            }
    //     //        }),
    //     //        {}
    //     //    );

    //     //    expect(Card).not.toBeCalledWith(
    //     //        expect.objectContaining({
    //     //            cardItem: {
    //     //                name: 'Tracker ',
    //     //                description: 'Description 2',
    //     //                createdAt: '2021-02-01T00:00:00.000Z'
    //     //            }
    //     //        }),
    //     //        {}
    //     //    );

    //        mockTrackers.forEach(tracker => {
    //            expect(Card).toHaveBeenCalledWith(
    //                expect.objectContaining({
    //                    cardItem: {
    //                        name: tracker,
    //                        description: tracker.description,
    //                        createdAt: tracker.createdAt
    //                    }
    //                }),
    //                {}
    //            );
    //        });

    //        // Verify the number of times Card component was called
    //        expect(Card).toHaveBeenCalledTimes(mockTrackers.length);
    //    })

           expect(Card).toBeCalledWith(
               expect.objectContaining({
                   cardItem: {
                       name: 'Tracker 1',
                       description: 'Description 1',
                       createdAt: '2021-01-01T00:00:00.000Z'
                   }
               }),
               {}
           );

           expect(Card).not.toBeCalledWith(
               expect.objectContaining({
                   cardItem: {
                       name: 'Tracker ',
                       description: 'Description 2',
                       createdAt: '2021-02-01T00:00:00.000Z'
                   }
               }),
               {}
           );       
    });

});