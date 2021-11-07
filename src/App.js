import './App.scss';
import { Works } from './Works'
import { Words } from './Words'
import { Present } from './Present'
import { Past } from './Past'
import { NavBar } from './NavBar'
import { NavBarMobile } from './NavBarMobile'
import { SucheInDerNachtDE } from './stories/DE/sucheInDerNachtDE'
import { Paintings } from './works/Paintings'
import { Drawings} from './works/Drawings'
import { Scrolls } from './works/Scrolls'
import { Sculptures } from './works/Sculptures'
import { SucheInDerNachtZH } from './stories/ZH/sucheInDerNachtZH'
import { GeierUndFledermausDE } from './stories/DE/GeierUndFledermausDE'
import { GeisterpferdDE } from './stories/DE/GeisterpferdDE'
import { GeisterpferdZH } from './stories/ZH/GeisterpferdZH'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="container-fluid">
    <NavBarMobile/>
    <div className="row">
    <div className="col-2 nav m-1">
    <NavBar/>
    </div>
    <div className="col mt-5">
<Switch>
  <Route exact path="/">
       <Works />
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
  <Route exact path="/works/paintings">
      <Paintings />
  </Route>
  <Route exact path="/works/drawings">
      <Drawings />
  </Route>
  <Route exact path="/works/scrolls">
      <Scrolls />
  </Route>
  <Route exact path="/works/sculptures">
      <Sculptures />
  </Route>
</Switch>
    </div>
    </div>
    </div>
    </Router>
  );
}

export default App;
