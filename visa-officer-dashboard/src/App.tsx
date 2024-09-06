import { Link } from "react-router-dom";
import "./styles/App.css";
import "./styles/global.css";



function App() {
  return (
    <>
      <div className="center-both">
        <nav>
          <Link to="/">VisaApplication</Link>
          <Link to="/VisaApplication">VisaApplication</Link>
          <Link to="/InterpolePage">Interpole</Link>
          <Link to="/example">Example</Link>
          <Link to="/login">Login</Link>
          <Link to="/example">Example</Link>
        </nav>
      </div>
    </>
  );
}

export default App;
