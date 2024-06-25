import { useState } from "react";
import { TransactionType } from "../../shared/enums/Transaction";
import styles from  './Transaction.module.scss'

interface AddTransactionProps{
    options:{
        type:TransactionType;
        segment:string;
    }
}
const AddTransaction = () =>{
    const [amount,setAmount] = useState<number>(0);
    return(
        <div className={styles.container}>
            <div className={styles.amountInfo}>
                <div className={styles.text}>
                    How much?
                </div>
                <div className={styles.input}>
                    &#8377;<input onChange={(e) => setAmount(Number(e.target.value))} value={amount}/>
                </div>
            </div>

            {/* transaction info */}
            <div className={styles.transactionInfo}>

            </div>
        </div>
    );
}
export default AddTransaction;