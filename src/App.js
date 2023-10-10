import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Filter from "./components/Filter/Filter";

import AddProperty from "./components/Add-Property/AddProperty";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [Show, setShow] = useState(false);
  const [ShowFilter, setShowFilter] = useState(false);
  const { isAuthenticated } = useAuth0();

  const addPropertyHandler = () => {
    if (!Show) {
      setShow(true);
    }
    if (Show) {
      setShow(false);
    }
  };

  const FilterPropertyShow = () => {
    if (!ShowFilter) {
      setShowFilter(true);
    }
    if (ShowFilter) {
      setShowFilter(false);
    }
  };

  return (
    <div>
      <Navbar />
      {ShowFilter && <Filter />}

      {Show && <AddProperty />}

      {isAuthenticated && (
        <HomePage
          onAddPropertyHandler={addPropertyHandler}
          onFilterPropertyShow={FilterPropertyShow}
        />
      )}
    </div>
  );
}

export default App;
