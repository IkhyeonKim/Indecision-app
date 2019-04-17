import React from 'react'

const Option = (props) => {
    return (
        <div className="option">
            <p> {props.index}. {props.optionText}</p>
            <button className="button button--remove"
            onClick={(e) => {
               props.handleDeleteOption(props.optionText)
            }} 
            >Remove</button>
        </div>
    )
}

export default Option