import React from 'react';

export default class CheckboxWithLabel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isChecked: false};
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.setState({isChecked: !this.state.isChecked});
    }

    render() {
        return (
            <div>
            <label>
                <input
                    type="checkbox"
                    value={this.state.isChecked}
                    checked={this.state.isChecked}
                    onChange={this.onChange}
                />
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
            </label>
            </div>
        );
        //<p>{this.state.isChecked ? "True" : "False" }</p>  
    }
}