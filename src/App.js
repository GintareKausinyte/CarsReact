import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import CarsPage from './pages/CarsPage'

function App() {
  return (
  <BrowserRouter>
  <Switch>
  <Route exact path="/cars">
    <CarsPage/>
  </Route>
  <Redirect exact from='/' to='/cars'/>
  </Switch> 
  </BrowserRouter>
  );
}

export default App;
