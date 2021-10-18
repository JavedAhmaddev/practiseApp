import React,{useRef} from 'react'
import Button from './Button'

function UseImperativrHandle() {

    const ButtonRef = useRef(null)
    return (
        <div>
            <button onClick={()=>{ButtonRef.current.alterToggle()}}>Button From Parent</button>
            <Button ref={ButtonRef}></Button>
        </div>
    )
}

export default UseImperativrHandle
