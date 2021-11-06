import './App.css';
import { Home } from './Home'
import { Works } from './Works'
import { Words } from './Words'
import { Present } from './Present'
import { Past } from './Past'
import { SucheInDerNachtDE } from './stories/DE/sucheInDerNachtDE'
import { SucheInDerNachtZH } from './stories/ZH/sucheInDerNachtZH'
import { GeierUndFledermausDE } from './stories/DE/GeierUndFledermausDE'
import { GeisterpferdDE } from './stories/DE/GeisterpferdDE'
import { GeisterpferdZH } from './stories/ZH/GeisterpferdZH'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App" class="container-fluid">


<Switch>
  <Route exact path="/">
       <Home />
  </Route>
  <Route exact path="/works">
      <Works />
  </Route>
  <Route exact path="/words">
      <Words />
  </Route>
  <Route exact path="/present">
      <Present />
  </Route>
  <Route exact path="/past">
      <Past />
  </Route>
  <Route exact path="/de/suche">
      <SucheInDerNachtDE />
  </Route>
  <Route exact path="/zh/suche">
      <SucheInDerNachtZH />
  </Route>
  <Route exact path="/de/geier">
      <GeierUndFledermausDE />
  </Route>
  <Route exact path="/de/geisterpferd">
      <GeisterpferdDE />
  </Route>
  <Route exact path="/zh/geisterpferd">
      <GeisterpferdZH />
  </Route>
</Switch>
    </div>
    </Router>
  );
}

export default App;
