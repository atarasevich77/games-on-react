import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Snake from "./components/Snake";
import NoPageFound from "./components/NoPageFound";
import Header from "./components/Header";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/snake" component={Snake}/>
                <Route component={NoPageFound}/>
            </Switch>
        </Router>
    );
}

export default App;
