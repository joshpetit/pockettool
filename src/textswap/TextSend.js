import React, { Component } from 'react'

class TextSend extends Component {
    constructor(props) {
        super(props);

        this.state = {
            code: '',
            text: ''
        }

        this.handleSubmitRequest = this.handleSubmitRequest.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmitRequest(event) {
        event.preventDefault();
        let code = this.state.code.toString();
        let text = this.state.text.toString();
        if (code.trim() === '' || text.trim() === '') {
            console.log('no empty values')
        } else {
            this.props.sendText(code, text);
        }
    }

    handleChange(e) {
        let state = e.target.name;
        let value = e.target.value;
        this.setState({
            [state]: value
        })
    }

    render() {
        return (
            <div>
                <form name='textSend' onSubmit={this.handleSubmitRequest}>
                    <input type='text' onChange={this.handleChange} name='code' placeholder='Code' />
                    <input type='text' onChange={this.handleChange} name='text' placeholder='Link/text' />
                    <button type='submit'>Send</button>
                </form>
            </div>
        )
    }
}

export default TextSend;

