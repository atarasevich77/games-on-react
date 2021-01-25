import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {connect} from "react-redux";
import Home from "./components/pages/Home";
import Snake from "./components/pages/Snake";
import NoPageFound from "./components/pages/NoPageFound";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import {Row} from "react-bootstrap";

function App(props) {
    const serverStatus = {
        color: props.severConnect ? 'green' : 'red'
    }

    return (
        <Router>
            <Header />
            <Row className="row justify-content-sm-end">
                Server status: &nbsp; <span style={serverStatus}>{props.severConnect ? 'Ok' : 'Down'}</span>
            </Row>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/snake" component={Snake}/>
                <Route component={NoPageFound}/>
            </Switch>
            <Footer />
        </Router>
    );
}

const mapStateToProps = (state) => (
    {severConnect: state.severConnect}
);

export default connect(mapStateToProps, null)(App);
