import React, { Component } from 'react'


class TextReceive extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.copyItem = this.copyItem.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.code.trim() !== '') {
            this.props.retrieveText(this.state.code.trim())
                .then(res => {
                    let responseArea = document.getElementById('responseArea');
                    responseArea.value = res.text;
                }).catch(err => {
                alert(err);
            })
        } else {
            alert("Code can't be empty!")
        }
    }


    handleChange(event) {
        let state = event.target.name;
        let value = event.target.value;

        this.setState({
            [state] : value
        })
    }

    copyItem(event) {
        event.preventDefault();
        let text = document.getElementById("responseArea");

        if (text !== null) {
            text.select();
            text.setSelectionRange(0, 99999);

            document.execCommand("copy");

            alert("Copied Link!");
        }
    }

    render() {

        return (
            <div   className="col s12 m5 l5 offset-l2 offset-m2 z-depth-1 ">
                <h6 className="center">Restore a Link</h6>

                <form   onSubmit={this.handleSubmit}>
                    <label id="textReceive" className='scrollSpy' htmlFor="retrievalCode">code:</label>
                    <input type="text" onChange={this.handleChange} name='code' placeholder='code' />

                    <label htmlFor="responseArea">retrieved link:</label>
                    <textarea id='responseArea'  placeholder='response' readOnly />
                    <div className='center-align'>
                        <button onClick={this.handleSubmit} type="submit" className="btn-large">Restore</button>
                        <button onClick={this.copyItem} className="btn-floating" ><i className="material-icons">content_copy</i></button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TextReceive;