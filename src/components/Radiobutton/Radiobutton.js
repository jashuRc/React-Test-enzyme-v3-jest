import React from 'react';

export default class Radiobutton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Radiobuttons : [
            {id:1, name: "male", isChecked:false},
            {id:2, name: "female", isChecked:false}
            ]
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        console.log()
    }

    render() {
        return (
            <label>
                <input
                    type="radio"
                    value={this.state.isChecked}
                    checked={this.state.isChecked}
                    onChange={this.onChange}
                    radioGroup="gender"
                    className="male"
                    >
                    {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
                </input>
                <input
                    type="radio"
                    value={this.state.isChecked}
                    checked={this.state.isChecked}
                    onChange={this.onChange}
                    radioGroup="gender"
                    className="female"
                    >
                    {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
                </input>
            </label>

        )
    }

}