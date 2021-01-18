import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Snake from "./components/pages/Snake";
import NoPageFound from "./components/pages/NoPageFound";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/snake" component={Snake}/>
                <Route component={NoPageFound}/>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
