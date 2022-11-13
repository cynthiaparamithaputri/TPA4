import { Routes, Route, Link } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import PortofolioPage from "../pages/PortofolioPage";
import ArticlesPage from "../pages/ArticlesPage";
import ArticleOne from "../pages/ArticleOne";
import ArticleTwo from "../pages/ArticleTwo";

const NavBar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
            <Link to={"/"}><a className="navbar-brand"><span id="fn">Cynthia </span><span id="ln">Paramitha Putri</span></a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to={"/"}><a className="nav-link" aria-current="page">
                                Home
                            </a></Link>
                        </li>
                        <li className="nav-item">
                        <Link to={"/about"}><a className="nav-link">
                                About
                            </a></Link>
                        </li>
                        <li className="nav-item">
                        <Link to={"/portofolio"}><a className="nav-link">
                                Portofolio
                            </a></Link>
                        </li>
                        <li className="nav-item">
                        <Link to={"/articles"}><a className="nav-link">
                                Articles
                            </a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portofolio" element={<PortofolioPage />} />
            <Route path="/articles" element={<ArticlesPage />} >
                <Route path="articleone" element={<ArticleOne />} />
                <Route path="articletwo" element={<ArticleTwo />} />
            </Route>
        </Routes>
        </>
    );
};

export default NavBar;