import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/Indecision-app'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const Layout = () => {
    return (
        <div>
            <p>Header</p>
            <p>Footer</p>
        </div>
    )
}

const template = (
    <div>
        <h1>Page title </h1>
        <p>This is my page </p>
    </div>
)


const appRoot = document.getElementById('app')

ReactDOM.render(<IndecisionApp /> , appRoot)

// class OldSyntax {
//     constructor() {
//         this.name = 'Mike'
//     }
//     // getGreeting() {
//     //     return `Hi my name is ${this.name}`
//     // }
//     getGreeting = () => {
//         return `Hi my name is ${this.name}`
//     }
// }

// const oldSyntax = new OldSyntax()
// const getGreeting = oldSyntax.getGreeting
// console.log(getGreeting())

// class NewSyntax {
//     name = 'Jane'
//     getGreeting = () => {
//         return `Hi my name is ${this.name}`
//     }
// }

// const newSyntax = new NewSyntax()
// const newGetGreeting = newSyntax.getGreeting
// console.log(newGetGreeting())