import React from 'react';

//import all componets here.
import Radiobutton from './components/Radiobutton/Radiobutton';
import CheckboxWithLabel from './components/Checkbox/CheckboxWithLabel';

export default class App extends React.Component {
    render() {
        return(
            <div>
                <p> Radiobutton : <Radiobutton/> </p>
                <p> Checkbox : <CheckboxWithLabel /> </p>
            </div>
        )
    }
}