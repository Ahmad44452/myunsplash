import SingleImage from "./SingleImage";
import * as Stl from '../styles/DisplayImages.styled';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';


const DisplayImages = ({ allImages, getImagesApi }) => {


  return (
    <Stl.ImagesContainer>

      {
        allImages &&
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="2rem">

            {
              allImages.map(img => (
                <SingleImage
                  key={img._id}
                  id={img._id}
                  imgLabel={img.label}
                  imgLink={img.imgurl}
                  getImagesApi={getImagesApi}
                />
              ))
            }

          </Masonry>

        </ResponsiveMasonry>
      }



    </Stl.ImagesContainer>
  )
}

export default DisplayImages;