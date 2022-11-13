import ArticlesPage from "../pages/ArticlesPage";
import { Routes, Route, Link } from "react-router-dom";

const BackButtonA = () => {
    return (
        <>
        <div className="back-btn">
        <Link to={"/articles"}><button type="button" className="btn btn-primary">Return</button></Link>
        </div>
        <Routes>
        <Route path="/articles" element={<ArticlesPage />} >
            </Route>
        </Routes>
        </>
    );
};

export default BackButtonA;