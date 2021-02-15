import React from 'react'

const Description=(props)=>{
    const {processor, graphics, memory, storage}= props;
    return(
        <div className="description">
            <h2>Customise your 16‑inch MacBook Pro - Space Grey</h2>
            <div>
            {processor.description}
            </div>
            <div>
            {graphics.description}
            </div>
            <div>
            {memory.description}
            </div>
            <div>
            {storage.description}
            </div>
        </div>
    )
}

export default Description