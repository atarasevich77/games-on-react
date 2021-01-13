import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Snake from "./components/Snake";
import NoPageFound from "./components/NoPageFound";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/snake" component={Snake}/>
                <Route component={NoPageFound}/>
            </Switch>
        </Router>
    );
}

export default App;
