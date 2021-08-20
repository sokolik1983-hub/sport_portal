import {Route, Switch} from "react-router-dom"
import StickyBox from "react-sticky-box";
import Nav from "./components/Nav";
import {appRoutes} from "./appConfig";
import './App.css';


function App() {
    {
        console.log(appRoutes)
    }
    return (

        <Switch>
            <Route>
                <>
                    <header>
                        <Nav/>
                    </header>
                    <Switch>
                        <div className="content">
                            <Route path="/" exact>
                                <div className="main-content">
                                    <h1>Привет, игроки!!!</h1>
                                    Content
                                </div>
                            </Route>
                            <Route path="/services" component={Nav}/>
                            <Route path="/bukmakers" component={Nav}/>
                            <StickyBox offsetTop={60}>
                                <aside>Aside</aside>
                            </StickyBox>
                            <Route path="/bukmakers" component={Nav}/>
                        </div>
                    </Switch>
                </>
            </Route>
        </Switch>
    );
}

export default App;
