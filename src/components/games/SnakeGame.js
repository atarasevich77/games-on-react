import {connect} from "react-redux";
import {Button, Row} from "react-bootstrap";
import {useState} from "react";

function SnakeGame(props) {
    const initialRows = [];
    const [rows, setRows] = useState('');
    const initializeRows = (e) => {
        e.preventDefault();
        for (let i = 0; i < rows; i++) {
            initialRows.push([]);
            for (let j = 0; j < rows; j++) {
                initialRows[i].push("blank");
            }
        }
        console.log(initialRows);
        setRows('');
    }


    return (
        <Row className="row justify-content-sm-center">
            <input type="text" onChange={(e) => setRows(e.target.value)}></input>
            <Button variant="dark" onClick={initializeRows}>Create</Button>
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
