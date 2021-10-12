import React,{useReducer} from 'react'


const reducer=(state,action)=>{
    switch(action.type){
        case "INC":
            return { count:state.count+1 , showText:state.showText}
        case "TOGGLE":
            return{ count:state.count , showText: !state.showText}
        default:
            return state
    }
}

function UseReducerHook() {
    const [state, dispatch] = useReducer(reducer, {
        count:0,
        showText:true
    })
    return (
        <div style={{textAlign:'center', padding:'30px'}}>
            <h1>{state.count} </h1>
            <button onClick={()=>{ dispatch({type: "INC"}); dispatch({type: "TOGGLE"})}}> Click Here </button>
            {state.showText && <h3> This is a Text </h3>}
            
        </div>
    )
}

export default UseReducerHook
