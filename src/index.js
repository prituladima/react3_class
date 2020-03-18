import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay.js";

class App extends React.Component {

    state = {lat: null, errorMessage: ''};//will call constructor wft?
    // constructor(props) {
    //     super(props);
        //One way to init
        // this.state = {lat: null, errorMessage: ''};

    // }



    componentDidMount() {
        //Start some single initial process
        window.navigator.geolocation.getCurrentPosition(
            position => {
                // this.state.lat =
                // Will call rerender
                this.setState({lat: position.coords.latitude});
                console.log(position);
            },
            error => {
                this.setState({errorMessage: error.message});
                console.log(error);
            }
        );
        console.log('My component was rendered to the screen!');
    };

    componentDidUpdate() {
        console.log('My component was just updated - it rerendered!');
    };

    render() {
        console.log('Render');
        if (this.state.errorMessage && !this.state.lat)
            return (
                <div>
                    Error: {this.state.errorMessage}<br/>
                </div>
            );
        else if (!this.state.errorMessage && this.state.lat) {
            return (
                <SeasonDisplay lat={this.state.lat}/>
                // <div>
                //     Latitude: {this.state.lat}
                // </div>
            );
        } else {
            return (
                <div>
                    Loading...
                </div>
            );
        }
    }
};


ReactDOM.render(
    <App/>
    , document.querySelector('#root'));
