import "./Navbar.css";
import { Icon } from '@iconify/react';

const Navbar = ({ data, handleProfile }) => {
    return (
        <header className="header">
            {data === "" ? (
                <>
                    <div className="nav" style={{ color: "#707070" }}>
                        <i className="fa fa-bars" />
                    </div>
                    <div className="logo">Logo</div>
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
