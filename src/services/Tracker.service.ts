import { TRACKER } from "../data/mockData";

export const fetchTracker = async () =>{
    return TRACKER;
}

export const fetchTrackerDetailById = async(id:string)=>{
     return TRACKER.find(tracker => tracker.id === id);
}