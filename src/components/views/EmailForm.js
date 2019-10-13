import React, {Component} from "react";

export default class EmailForm extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="inputMail">Email :</label>
                    <input type="email" id="inputMail" placeholder="Saisissez votre adresse e-mail"/>
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
        );
    }
}