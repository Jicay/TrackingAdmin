import React, {Component} from "react";
import {Container} from 'reactstrap';
import Image from "./Image";
import EmailForm from "./EmailForm";

export default class ImageForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="image container">
                <div className='row'>
                    <Image image='916/43406628822_cffd9b699e_b'/>
                </div>
                <div className='row'>
                    <EmailForm />
                </div>
            </Container>
        );
    }
}