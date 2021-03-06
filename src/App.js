import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';
import {BrowserRouter as Router  ,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="app">
     <Header/>
    <div className='app_body'>
    <Sidebar/>
    <Switch>
      <Route path="/mail">
      <Mail/>
      </Route>
      <Route path="/">
      <EmailList/>
      </Route>
      </Switch>
    </div>
    </div>
    </Router>
  );
}

export default App;
