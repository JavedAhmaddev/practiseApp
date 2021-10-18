import React, { useState,forwardRef,useImperativeHandle } from 'react'

const Button= forwardRef((props , ref)=> {
    const [Toggle, setToggle] = useState(false);
    useImperativeHandle(ref , ()=>({
            alterToggle(){
                setToggle(!Toggle);
            }
    }))
    return (
        <div>
            <button onClick={()=>setToggle(!Toggle)}> Button From Child</button>
            {Toggle && <h1> Toggle </h1>}
        </div>
    )
});

export default Button
