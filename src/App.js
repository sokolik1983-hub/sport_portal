
import StickyBox from "react-sticky-box";
import Nav from "./components/Nav";
import './App.css';


function App() {
  return (
      <>
        <header>
            <Nav />
        </header>
        <div className="content">
            <div className="main-content">
                <h1>Привет, игроки!!!</h1>
                Content
            </div>
            <StickyBox offsetTop={60}>
                <aside>Aside</aside>
            </StickyBox>
        </div>
      </>
  );
}

export default App;
