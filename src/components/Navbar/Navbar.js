import "./Navbr.css";
import { useAuth0 } from "@auth0/auth0-react";

import { ImHome } from "react-icons/im";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Logo */}
        <div className="logo">
          <img src="./propertyLOgo.png" alt="Property Portal Logo" />
        </div>
        <h1 className="icon">
          <ImHome className="HomeIcon" />
        </h1>
      </div>
      <div className="navbar-right">
        {isAuthenticated && (
          <div className="UserProfile">
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
          </div>
        )}
        {/* Home button */}

        {/* Login/Signout buttons */}
        <div className="Auth-Ican">
          {!isAuthenticated ? (
            <button onClick={() => loginWithRedirect()}>Log In</button>
          ) : (
            <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
