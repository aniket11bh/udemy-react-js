import React from 'react';

const userinput = (props) => {
    return (
        <form>
            Name <br/>
            <input type="text" onChange={props.nameHandler} value={props.name}/>
        </form>
    )
};

export default userinput;