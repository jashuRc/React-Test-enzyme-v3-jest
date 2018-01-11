import React from 'react';

export default class CheckboxWithLabel extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {isChecked: props.isChecked };
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        return this.state.isChecked;
       // this.setState({isChecked: !this.state.isChecked});
    }

    render() {
        return (
            <div>
            
                <input
                    type="checkbox"
                    value={this.state.isChecked}
                    checked={this.state.isChecked}
                    onChange={this.onChange}
                />
            <label>
                {this.state.isChecked ? "Hello" : this.props.labelOff}
            </label>
            </div>
        );
        //<p>{this.state.isChecked ? "True" : "False" }</p>  
    }
}