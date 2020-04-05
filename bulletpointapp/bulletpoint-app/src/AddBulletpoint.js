import React, { Component } from 'react'; 

class AddBulletPoint extends Component {
    state = {
        content: '* ',
    }
        handleChange = (e) => {
            this.setState({
                content: e.target.value
            })
        }
        handleSubmit = (e) => {
            e.preventDefault(); 
            this.props.addBulletpoint(this.state);
            this.setState({
                content: '* '
            })
        }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new bulletpoint:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}>
                
                    </input>
                </form>
            </div>
        )
    }
}

export default AddBulletPoint