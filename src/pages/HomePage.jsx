import AboutPage from "./AboutPage";
import { Routes, Route, Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
        <div className="home">
        <div className="container-img">
        <div className="row">
            <div className="col">
            <div className="card border-0">
                <img src="images/book.jpg" className="card-img" alt="..." />
            </div>
            </div>
            <div className="col">
            <div className="card border-0">
                <img src="images/cup.jpg" className="card-img" alt="..." />
            </div>
            </div>
            <div className="col">
            <div className="card border-0">
                <img src="images/perfume.jpg" className="card-img" alt="..." />
            </div>
            </div>
        </div>
        </div>
        <div className="home-text">
            <h1>WELCOME</h1>
            <h3>I'm A Soon To Be Web Developer</h3>
            <h3>Let's Get To Know Me!</h3>
            <Link to={"/about"}><button type="button" className="btn btn-primary">Go</button></Link>
        </div>
        </div>
        <Routes>
            <Route path="/about" element={<AboutPage />} />
        </Routes> 
        </>
    );
};

export default HomePage;