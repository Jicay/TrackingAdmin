import React, {Component} from "react";
import SessionInfo from "./SessionInfo";

export default class Sessions extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {getSessions} = this.props;
        getSessions();
    }

    render() {
        const {sessions} = this.props;
        console.log(sessions);
        if (sessions) {
            return (
                <div className="container">
                    {sessions.map(({id, creationDate}) => (
                        <SessionInfo id={id} date={creationDate}/>
                    ))}
                </div>
            );
        } else {
            return (
                <div className="container">
                    Attente de chargement
                </div>
            )
        }
    }
}