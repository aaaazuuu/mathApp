import React from "react";

const BankList = ({bankList}) => {
    return (
        <ul style={{listStyle: "none"}}>
            {bankList.map((bank, index) => (
                <li key={index}>¥{bank}</li>
            ))}
        </ul>
    );
}

export default BankList;