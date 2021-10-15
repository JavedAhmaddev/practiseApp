import React,{useRef} from 'react'

function UseRefHook() {

    const inputRef = useRef(null);


    const handlelick=()=>{
        console.log(inputRef.current.value);
        inputRef.current.focus();
        inputRef.current.value="";
    }
    return (
        <div style={{textAlign:'center', padding:'30px'}}>
            <h1> Pedro! </h1>
            <input type="text" placeholder="Ex...." ref={inputRef}></input>
            <button onClick={handlelick} >Change Name </button>
        </div>
    )
}

export default UseRefHook
