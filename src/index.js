import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {lat: null, errorMessage: ''};
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
    }

    render() {
        if (this.state.errorMessage && !this.state.lat)
            return (
                <div>
                    Error: {this.state.errorMessage}<br/>
                </div>
            );
        else if (!this.state.errorMessage && this.state.lat) {
            return (
                <div>
                    Latitude: {this.state.lat}
                </div>
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
