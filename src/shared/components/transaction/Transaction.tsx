import { TransactionCategory, PaymentMethod, TransactionType } from "../../enums/Transaction";
import styles from './Transaction.module.scss'
import shoppingBagIcon from '../../../assets/icons/shopping-bag.svg';
import { transformCreateDate } from "../../../services/Utils";

interface TransactionProps {
    transaction: {
        id: string;
        createdAt: string,
        amount: number,
        description: string,
        category: TransactionCategory,
        type: TransactionType,
        paymentMethod: PaymentMethod
    }
}


const Transaction = ({ transaction }: TransactionProps) => {

   
    return (
        <>
            <div className={styles.transaction}>
                <div className={styles.icon}>
                    <img src={shoppingBagIcon} />
                </div>
                <div className={styles.info}>
                    <div className={styles.category}>
                        {transaction.category}
                    </div>
                    <div className={styles.description}>
                        {transaction.description}
                    </div>
                </div>

                <div className={styles.amount}>
                    <div className={styles.amount}>
                        {transaction.amount}
                    </div>

                    <div className={styles.date}>
                        {transformCreateDate(transaction.createdAt)}
                    </div>
                </div>
            </div>
        </>)
}
export default Transaction;