import { useEffect, useState } from "react";
import { fetchTracker } from "../../../services/Tracker.service";
import Card from "../common/card/Card";
import { Link } from "react-router-dom";
import styles from './Tracker.module.scss'

interface Tracker {
    id: string;
    name: string;
    createdAt: string;
    description: string;

}
const Trackers = () => {

    const [trackers, setTrackers] = useState<any>([]);
    useEffect(() => {
       
        fetchTrackers();
    },[])

    const fetchTrackers = async () => {
        const response = await fetchTracker();
        console.log("Resp", response)
        setTrackers(response);
        console.log(trackers)
    }
    return (
        <div>
            Trackers
            <div className="list-container">
                {
                    trackers.map((tracker: Tracker) => (
                        <Link to={`tracker/${tracker.id}`} className={styles.cardLink} key={tracker.id}>
                            <Card key={tracker.id} cardItem={{
                                name: tracker.name,
                                description: tracker.description,
                                createdAt: tracker.createdAt
                            }} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )

}
export default Trackers;