import React, {Component} from "react";

export default class MouseIndicator extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {top, left} = this.props;
        const style = {
            position: 'relative',
            left: left + 'px',
            top: top + 'px',
            zIndex: 10
        }

        return (<div className="mouse-indicator" style={style}></div>)
    }

}
