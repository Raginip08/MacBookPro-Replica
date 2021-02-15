import React from 'react'

const Components=(props)=>{
    const {type, varients,onChangeVarient, selected}= props;

    const onClick=(e)=>{
        onChangeVarient(type,e.target.dataset.id,e.target.dataset.price);
    }
    return(
        <div className="component">
            <h3>{type}</h3>
            {varients.map((item)=>{
                return(
                    <div key={item.id} data-id={item.id} data-price={item.price} onClick={onClick} className={item.id==selected?"varient selected":"varient"}>{item.description}</div>
                )
            })}
            
        </div>
    )
}

export default Components