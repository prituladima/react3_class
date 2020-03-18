import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {

    state = {lat: null, errorMessage: ''};//will call constructor wft?
    // constructor(props) {
    //     super(props);
    //One way to init
    // this.state = {lat: null, errorMessage: ''};
    // Don't
    // this.state.lat = null;

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

    renderContent() {
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
                <Spinner message="Please allow site to see your location"/>
            );
        }
    };

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    };
};


ReactDOM.render(
    <App/>
    , document.querySelector('#root'));
