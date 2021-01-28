import {connect} from "react-redux";
import { Row } from "react-bootstrap";

function SnakeGame(props) {

    console.log(props.users)

    return (
        <Row>

        </Row>
    );
}

const mapStateToProps = (state) => (
    {users: state.users}
);

const mapDispatchToProps = (dispatch) => {
    return {
        users: () => dispatch(),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SnakeGame);
