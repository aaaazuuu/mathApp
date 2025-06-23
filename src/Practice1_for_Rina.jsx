import React, {Fragment, useState, useRef} from 'react';
import PayList from "./components/PayList.jsx";
import BankList from "./components/BankList.jsx";
import './assets/style.css'; // CSSファイルをインポート

const Practice1_for_Rina = () => {
    const [payList, setPayList] = useState([]); //クレカのリスト
    const [bankList, setBankList] = useState([]); //銀行口座のリスト
    const [totalPay, setTotalPay] = useState(0); //クレカの合計値
    const [totalBank, setTotalBank] = useState(0); //銀行口座の合計値
    const payRef = useRef(null);
    const bankRef = useRef(null);

    const handleAddPay = () => {
        if (payRef.current) { // ref.current が null でないことを確認
            const payValue = parseInt(payRef.current.value, 10);
            if (!isNaN(payValue) && payValue !== 0) {
                setPayList([...payList, payValue]);
            }
            payRef.current.value = "";
        }
    };

    const handleAddBank = () => {
        if (bankRef.current) { // ref.current が null でないことを確認
            const bankValue = parseInt(bankRef.current.value, 10);
            if (!isNaN(bankValue) && bankValue !== 0) {
                setBankList([...bankList, bankValue]);
            }
            bankRef.current.value = "";
        }
    };
    const sumPay = () => {
        const sum = payList.reduce((acc, curr) => acc + curr, 0);
        setTotalPay(sum)
    };

    const sumBank = () => {
      const sum =bankList.reduce((acc, curr) => acc + curr, 0);
      setTotalBank(sum)
    };

    return (
        <div className="container">
                <h1>クレカ計算機</h1>
                <input type="text" placeholder="クレカの引き落とし額を入力…" ref={payRef} style={{width: "28ch", height: "2rem"}}/>
                <p>
                    <button className="button" onClick={handleAddPay}>クレカ追加</button>
                    <button className="button" onClick={sumPay}>合計</button>
                </p>
                <PayList payList={payList}/>
                <p>クレカ引き落とし額合計：¥{totalPay}</p>

                <input type="text" placeholder="銀行口座額を入力…" ref={bankRef} style={{width: "28ch", height: "2rem"}}/>
                <p>
                    <button className="button" onClick={handleAddBank}>口座額追加</button>
                    <button className="button" onClick={sumBank}>合計</button>
                </p>
                <BankList bankList={bankList}/>
                <p>貯金残高：¥{totalBank}</p>
                <p>残高：¥{totalPay - totalBank}</p>
        </div>
    )
}

export default Practice1_for_Rina

