
import './App.css';
import Login from './components/Login/Login';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from './components/dashboard/Sidebar/Sidebar';
import main from './components/main';
function App()
{
  return (
    <div className="App">



      <Router>
        <Switch>
          <Route exact path='/' component={Login}></Route>

          <Route exact path='/new' component={main}></Route>

        </Switch>
      </Router>




    </div>
  );
}

export default App;
