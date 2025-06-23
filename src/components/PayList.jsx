import React, {Fragment} from "react";

const PayList = ({payList}) => {
    return(
        <Fragment>
            <ul style={{listStyle: "none"}}>
                {payList.map((pay, index) => (
                    <li key={index}>¥{pay}</li>
                ))}
            </ul>
        </Fragment>
    );
};

export default PayList