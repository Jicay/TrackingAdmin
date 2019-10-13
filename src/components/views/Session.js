import React, {Component} from "react";
import {Link} from "react-router-dom";
import ImageForm from "./ImageForm";
import Home from "./Home";
import Congrats from "./Congrats";
import MouseIndicator from "./MouseIndicator";

export default class Session extends Component {
    constructor(props) {
        super(props);
        const {match} = this.props;

        const sessionId = match.params.sessionId;

        this.eventSource = new EventSource("https://tracking-mouse-back.herokuapp.com/sessions/" + sessionId + "/mouse-positions/stream");

        this.state = {
            page: 'home',
            x: 0,
            y: 0
        };
    }

    componentDidMount() {
        this.eventSource.addEventListener("mouse-position-event", e =>
            this.updateMousePosition(JSON.parse(e.data))
        );
    }

    updateMousePosition(mousePosition) {
        const height = document.getElementById('inner-page').offsetHeight;
        const width = document.getElementById('inner-page').offsetWidth;

        this.setState({page: mousePosition.page, x: mousePosition.x, y: mousePosition.y, height: height, width: width});
    }

    render() {
        const {match} = this.props;
        const {x, y, width, height} = this.state;

        const sessionId = match.params.sessionId;

        return (
            <div className="container">
                <Link to='/'>Retour à la liste des sessions</Link>
                <div>
                    Détail de la session {sessionId}
                </div>
                <div id="remote-page">
                    <MouseIndicator top={y * height} left={x * width}/>
                    <div id="inner-page">
                        {this.renderPage()}
                    </div>
                </div>
            </div>
        );
    }

    renderPage() {
        const {page} = this.state;

        if (page === 'home') {
            return (
                <Home/>
            )
        } else if (page === 'image') {
            return (
                <ImageForm/>
            )
        } else if (page === 'congrats') {
            return (
                <Congrats/>
            )
        } else {
            return null;
        }
    }
}