import React from 'react'
import Option from './Option'

const Options = (props) => {
  
    return (
    <div> 
        <div className="widget__header" >
            <h3 className="widget__header--title" >Your Options</h3>
            <button className="button button--remove" onClick={props.handleDeleteOptions}>Remove all</button>   
        </div>
     
        { props.options.length === 0 && <p className="widget__message" >Pleas add an option to get started</p> }
        {/* { 

            props.options.map( option => {
                return <Option 
                key={option} 
                optionText={option} 
                handleAddOption={props.handleDeleteOption}
                />
            })
        } */}
    
        {
            props.options.map( (option, index) => (
                <Option
                    key={option}
                    optionText={option}
                    index={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
    )
    
}

export default Options