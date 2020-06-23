import React, { Component } from 'react'


class TextReceive extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.code.trim() !== '') {
            this.props.retrieveText(this.state.code.trim())
                .then(res => {
                    let responseArea = document.getElementById('responseArea');
                    responseArea.value = res.text;
                }).catch(err => {
                console.log(err);
            })
        } else {
            console.log("Code can't be empty!")
        }
    }


    handleChange(event) {
        let state = event.target.name;
        let value = event.target.value;

        this.setState({
            [state] : value
        })
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name='code' placeholder='Code To Retrieve' />
                    <button type='submit'>Get</button><br />
                    <textarea id='responseArea'  placeholder='response' disabled contentEditable={false} />
                </form>
            </div>
        )
    }
}

export default TextReceive;