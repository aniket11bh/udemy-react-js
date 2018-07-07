import React from 'react'
import './UserOutput.css'

const useroutput = (props) => {
    return (
        <div className="UserOutput"> 
            <p> This is {props.name} paragraph 1 </p>
            <p> This is {props.name} paragraph 2 </p>
        </div>
    )
};

export default useroutput;