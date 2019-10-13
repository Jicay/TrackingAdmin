import React, {Component} from "react";

export default class Image extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {image} = this.props;

        return (
            <div className='col align-content-center'>
                <img className="img-fluid" src={'https://live.staticflickr.com/' + image + '.jpg'}/>
            </div>
        )
    }


}