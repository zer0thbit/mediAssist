import "./Navbar.css";

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
                    &larr;
                </div>
            )}
        </header>
    );
};
export default Navbar;
