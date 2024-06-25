import { useEffect, useState } from "react";
import { fetchTrackerDetailById } from "../../services/Tracker.service";
import { Link, useParams } from "react-router-dom";
import CarouselSlider from "../../shared/components/common/carouselSlider/CarouselSlider";
import style from './Tracker.module.scss';
import Transaction from "../../shared/components/transaction/Transaction";

const TrackerDetail = () => {

    const [trackerDetail, setTrackerDetail] = useState<any>({});
    const [balanceAmount, setBalanceAmount] = useState<number>(0);

    const { id } = useParams<{ id: string }>()
    useEffect(() => {
        fetchTrackerDetail();
    });

    const fetchTrackerDetail = async () => {
        if (id) {
            const trackerDetail = await fetchTrackerDetailById(id);
            if (trackerDetail) {
                setTrackerDetail(trackerDetail);
                getAccountbalance(trackerDetail.segments)
            }
        }
    }

    const getAccountbalance = (segments: any) => {
        const balanceAmount = segments?.reduce((total: number, segment: any) => {
            if (typeof segment?.amount == 'number') {
                total += segment.amount;
            }
            return total;
        }, 0);
        setBalanceAmount(balanceAmount);
        console.log(segments)
    }
    return (
        <>
            <div className={style.container}>
               <div className={style.wrapper}>
                    <div className={style.trackerMeta}>
                        <div className={style.accountInfo}>
                            <p>Balance Amount</p>
                            ₹{balanceAmount}
                        </div>
                        <CarouselSlider
                            slides={trackerDetail.segments ?? []}
                        />
                    </div>

                    {/* analytics */}
                    <div className={style.analytics}>
                        <h3>Spend Frequency</h3>
                    </div>

                    <div className={style['transactions']}>
                        <div className={style['actionTab']}>
                            <div>Recent Activity</div>
                            <span>See All</span>
                        </div>
                        <div className="transaction">
                            {trackerDetail?.transactions?.map((transaction: any, index: number) => (
                                <Transaction key={transaction.id} transaction={transaction} />
                            ))}
                        </div>
                    </div>
               </div>

                {/* Add transaction */}
                <Link to="transaction/add">
                    <div className={style.addIcon} >
                        +
                    </div>
                </Link>
            </div>
        </>)
}
export default TrackerDetail;