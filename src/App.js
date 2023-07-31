import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Profile from "./components/Profile";
// import Login from './components/Login'
import "./App.css";

const App = () => (
  <Switch>
    {/* <Route exact path="/login" element={<Login/>} /> */}
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/transactions" component={Transactions} />
    <Route exact path="/profile" component={Profile} />
  </Switch>
);

export default App;
