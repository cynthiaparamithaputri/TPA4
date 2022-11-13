import HomePage from "../pages/HomePage";
import { Link } from "react-router-dom";

const BackButton = () => {
    return (
        <>
        <div className="back-btn">
        <Link to={"/"}><button type="button" className="btn btn-primary">Return</button></Link>
        </div>
        </>
    );
};

export default BackButton;