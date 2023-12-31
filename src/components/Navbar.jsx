import React, { useContext} from "react";
import { ThemeContext } from "../contexts/ThemeContexts";
import { AuthContext } from "../contexts/AuthContext";


const Navbar = () => {
    const { isDarkTheme, lightTheme, darkTheme } = useContext(ThemeContext);
    const { isLoggedIn, changeAuthStatus } = useContext(AuthContext);
    const theme = isDarkTheme? darkTheme: lightTheme;

    return (
      <nav
        style={{
          background: theme.background,
          color: theme.text,
          height: "120px",
        }}
      >
        <h2 className="ui centered header">Oak Academy</h2>
        <p
          onClick={changeAuthStatus}
          style={{ textAlign: "center", cursor: "pointer" }}
        >
          {isLoggedIn ? "logged in" : "logged out"}
        </p>
        <div className="ui three buttons">
          <button className="ui button">Overview</button>
          <button className="ui button">Contact</button>
          <button className="ui button">Support</button>
        </div>
      </nav>
    );
}

      


export default Navbar;
