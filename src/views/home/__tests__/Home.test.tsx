import { render, screen } from "@testing-library/react";
import Home from "../Home.view";
import Trackers from "../../../shared/components/tracker/Trackers";

jest.mock('../../../shared/components/tracker/Trackers',()=>{
    return{
        __esModule:true,
        default:jest.fn().mockImplementation(()=><div>Trackers</div>)
    }
})

describe('Profile Component', () => {
    
    afterEach(()=>{
        jest.clearAllMocks();
    })
    test('Render properly', () => {
        render(<Home />);
    })

    test('Tracker render',()=>{
        render(<Home />);
        expect(screen.getByText('Trackers')).toBeInTheDocument();
        expect(Trackers).toBeCalledTimes(1);
    })
});