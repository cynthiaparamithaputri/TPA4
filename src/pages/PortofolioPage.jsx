import MovieWeb from "../components/MovieWeb";
import BmiWeb from "../components/BmiWeb";
import TreeIcon from "../components/TreeIcon";

const PortofolioPage = () => {
    return (
        <>
            <div className="porto d-flex flex-column align-items-center">
            <TreeIcon />
            <h1>Projects I've Done</h1>
            <BmiWeb />
            <MovieWeb />
            </div>
        </>
    );
};

export default PortofolioPage;