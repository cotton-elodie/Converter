import React from "react";

const Currency = ({name})=>{

    return (
        <li>{name}</li>
    )
}

export default React.memo (Currency);