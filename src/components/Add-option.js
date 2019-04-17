import React from 'react'

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    handleAddOption = (e) => {
        e.preventDefault();
        
        const formValue = e.target.myForm.value.trim()
        const error = this.props.handleAddOption(formValue) // this handleAddOption method comes from parent component, it returns error if something goes wrong

        if(!error){
            e.target.myForm.value = ''
        }        

        this.setState( () => {
            return { error: error }
        })
       
    }
    render() {
        return (
            <div>
                {this.state.error && <p className="add-option__error" >{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="myForm"/>
                    <button className="button" >Add option</button>
                </form>
            </div>
        )
    }
}