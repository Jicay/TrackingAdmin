import connect from "react-redux/es/connect/connect";
import Sessions from "../views/Sessions";
import {fetchSessionsIfNeeded} from "../../redux/action";

const mapStateToProps = state => {
    const {sessions} = state;
    return {
        sessions: sessions.sessions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSessions: () => dispatch(fetchSessionsIfNeeded())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sessions)