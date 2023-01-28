import Navbar from "./components/Navbar";
import DisplayImages from "./components/DisplayImages";
import AddPopup from "./components/AddPopup";
import { useEffect, useState } from "react";
import axios from "axios";


const App = () => {

  const [isPopupShowing, setPopupShowing] = useState(false);

  const [images, setImages] = useState([]);

  const getImagesApi = (controller = null) => {

    axios.get(`${process.env.REACT_APP_API_URI}/api/img/allimages`, controller && {
      signal: controller.signal
    }).then(res => {
      setImages(res.data);
    })

  }

  useEffect(() => {
    const controller = new AbortController();
    if (images.length === 0) {
      getImagesApi(controller);
    }

    return () => {
      controller.abort();
    }
  }, [images.length])

  return (
    <>
      <Navbar setPopupShowing={setPopupShowing} getImagesApi={getImagesApi} setImages={setImages} />
      <DisplayImages allImages={images} getImagesApi={getImagesApi} />
      {
        isPopupShowing ? <AddPopup setPopupShowing={setPopupShowing} getImagesApi={getImagesApi} /> : null
      }
    </>
  );
}

export default App;
