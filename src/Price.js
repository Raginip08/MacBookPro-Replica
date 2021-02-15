import React from 'react'

const Price=(props)=>{
    const {price}= props;
    const funcEMI=()=>{
        let interest = 13/1200;
        let term = 1*12;
        let top = Math.pow((1+interest),term);
        let bottom = top - 1;
        let ratio = top/bottom;
        let EMI = price * interest * ratio;
        let Total = EMI*term;
        return EMI.toFixed(0)
    }
    return(
        <div className="footer">
            {`From ₹${funcEMI()}/mo.`}
            <br/>
            {`Per Month with EMI,** or ${price}`}
        </div>
    )
}

export default Price