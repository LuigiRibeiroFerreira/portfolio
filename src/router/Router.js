import Projectspage from "../pages/ProjectsPage";
import Homepage from "../pages/HomePage";
import { BrowserRouter, Switch, Route} from 'react-router-dom'


const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path={"/"}>
          <Homepage/>
        </Route>
        <Route exact path= {"/projects"}>
          <Projectspage/>
        </Route>
        <Route>
          <div><h1>Página não encontrada</h1></div>
        </Route>
        </Switch>
      </BrowserRouter>
    )
}
export default Router