import React from "react"

function Friend(props) {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            <h3>{props.pets}</h3>
        </div>
    )
}

export default Friend