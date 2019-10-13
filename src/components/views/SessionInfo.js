import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class SessionInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, date} = this.props;
        const url = '/sessions/' + id;
        return (
            <div className="row">
                <div className="col">
                    {id}
                </div>
                <div className="col">
                    {date}
                </div>
                <div className="col">
                    <Link to={url}>Voir l'état de la session</Link>
                </div>
            </div>
        );
    }
}