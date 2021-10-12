import React from 'react'
import {x} from './Top.js'

export default function Bottom(props) {
    
    return (
        <div className="my-3">
            <h2> Preview </h2>
            <p>{x.length>0?x:"Enter Text in the Textbox To Preview"}</p>
        </div>
    )
}
