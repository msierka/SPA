import React, { Component } from 'react';
import '../styles/ContactPage.css'
class ContactPage extends Component {
    state = { 
        value: ''
     } 

     handleSubmit=e=>{
        e.preventDefault()
     }
     handleChange=e=>{
        this.setState({
            value: e.target.value
        })
     }
     handleClick=e=>{
        this.setState({
            value: ''
        })
     }
    render() { 
        return (
            <div className="contact">
        <form onSubmit={this.handleSubmit}>
            <h3>Napisz do nas!</h3>
            <textarea value={this.state.value} onChange={this.handleChange}></textarea>
            <button onClick={this.handleClick}>Wyślij</button>
        </form>
</div>
        );
    }
}


export default ContactPage;