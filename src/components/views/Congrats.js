import React, {Component} from "react";
import {Container,} from 'reactstrap';

export default class Congrats extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="congrats">
                <div>
                    Bravo pour avoir soumis !
                </div>
                <a href='#'>Retour à l'accueil</a>
            </Container>
        );
    }
}