import { Outlet, Link } from "react-router-dom";
import TreeIcon from "../components/TreeIcon";

const ArticlesPage = () => {
    return (
        <>
            <div className="d-flex flex-column align-items-center">
            <TreeIcon />
            </div>
            <div className="article-container d-flex flex-column align-items-stretch rounded">
                <h3>View My Articles</h3>
                <div className="article-title-container d-flex flex-column list-group-numbered">
                    <Link to={"articleone"} className="article-title list-group-item">RESENSI BUKU [TUHAN, PANTASKAH AKU MENGELUH?]</Link>
                    <Link to={"articletwo"} className="article-title list-group-item">ARTIKEL ILMIAH MENGENAI INSTAGRAM</Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default ArticlesPage;