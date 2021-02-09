import {connect} from "react-redux";
import {Button, FormControl, InputGroup, Row} from "react-bootstrap";
import {useState} from "react";

function SnakeGame() {
    const [board, setBoard] = useState([]);
    const [boardSize, setBoardSize] = useState(null);

    const onCreateBoard = (e) => {
        if(!isNaN(+boardSize) && boardSize !== null){
            for (let row = 0; row < boardSize; row++) {
                const cols = [];
                for (let col = 0; col < boardSize; col ++) {
                    cols.push({ row, col });
                }
                setBoard(cols);
            }
        }
        setBoardSize(null);
        e.preventDefault();
    }

    const drawGrid = () => {
        return (
            board.map((row, i) => {
                return row.map(cell => {
                    return <Row key={cell.row + cell.col} className="cell cell-border"/>
                });
            })
        );
    }

    return (
        <>
            <Row className="row justify-content-sm-center">
                <InputGroup className="mb-2 w-25">
                    <FormControl type="number"
                                 value={boardSize?? ''}
                                 onChange={e => setBoardSize(e.target.value)}
                                 placeholder="Input the Board Size"/>
                    <InputGroup.Append>
                        <Button variant="dark" onClick={onCreateBoard}>Button</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Row>
            <Row className="grid">
                { drawGrid() }
            </Row>
        </>
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
