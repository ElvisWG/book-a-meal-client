import React from "react";
import "./Header.css";

function Header({showing}) {
    const [show, setShow] = React.useState(false);
    return(
        <div>
            <div className="container">
            
                <h1 className="header">GrubHub</h1>
                </div>
            </div>
      );
}
export default Header;