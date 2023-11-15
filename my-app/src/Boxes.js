import React from "react"

export default function Boxes(props) {
    const style = { backgroundColor: props.on ? "#222222" : "transparent" }
    return (
        <div style={style} className="boxes"
            onClick={props.toggle} >

        </div>
    )
}