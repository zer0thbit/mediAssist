import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import { Icon } from '@iconify/react';

const Navbar = ({ data, handleProfile, handleFilterText }) => {

    return (
        <header className="header">
            {data === "" ? (
                <>
                    <div className="nav" style={{ color: "#707070" }}>
                        <i className="fa fa-bars" />
                    </div>
                    <div className="logo">Logo</div>
                    <SearchBar handleFilterText={handleFilterText} />
                </>
            ) : (
                <div className="back" onClick={() => handleProfile("")}>
                    <Icon icon="mdi:backburger" />
                </div>
            )}
        </header>
    );
};
export default Navbar;
