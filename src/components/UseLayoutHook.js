import React ,{useLayoutEffect,useEffect, useRef,useState} from 'react'

function UseLayoutHook() {
    const [Value, setValue] = useState("Pedro")

    const inputRef=useRef(null);

    useLayoutEffect(() => {
        
        console.log(inputRef.current.value);
    }, [])

    useEffect(() => {
        inputRef.current.value="Hello";
    }, [])
    return (
        <div>
            <input ref={inputRef}  type="text" value="Pedro" style={{width:'500px', height:'70px',fontSize:'50px'}}></input>
        </div>
    )
}

export default UseLayoutHook

// onChange={(event)=>{setValue(event.target.value)}