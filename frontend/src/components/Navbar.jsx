import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{ padding: "10px", background: "#333", color: "white" }}>
            <ul style={{ listStyleType: "none", margin: 0, padding: 0, display: "flex" }}>
                <li style={{ marginRight: "20px" }}>
                    <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
                </li>
                <li>
                    <Link to="/create" style={{ color: "white", textDecoration: "none" }}>Create</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
