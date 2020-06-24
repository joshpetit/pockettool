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
        let code = this.state.code.toString().trim();
        let text = this.state.text.toString().trim();
        if (code === '' || text === '') {
            alert('No empty values')
        } else {
            this.props.sendText(code, text)
                .then( res =>{
                    alert(res);
                })
                .catch( err =>{
                    alert(err);
                })
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
            <div className="col s12 m5 l5  z-depth-1">
                <h6 className="center">Save a Link</h6>
                <form name='textSend' onSubmit={this.handleSubmitRequestX}>
                    <label htmlFor="code">code:</label>
                    <input type='text' onChange={this.handleChange} name='code' placeholder='Code' />
                    <label htmlFor="text">link to send:</label>

                    <textarea type='text' onChange={this.handleChange} name='text' placeholder='Link/text' />
                    <div className="center-align">
                        <button onClick={this.handleSubmitRequest} type="submit" className="btn-large center-align">Send</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TextSend;

