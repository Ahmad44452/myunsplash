import Navbar from "./components/Navbar";
import DisplayImages from "./components/DisplayImages";
import AddPopup from "./components/AddPopup";
import { useState } from "react";


const App = () => {

  const [isPopupShowing, setPopupShowing] = useState(false);

  return (
    <>
      <Navbar setPopupShowing={setPopupShowing} />
      <DisplayImages />
      {
        isPopupShowing ? <AddPopup setPopupShowing={setPopupShowing} /> : null
      }
    </>
  );
}

export default App;
