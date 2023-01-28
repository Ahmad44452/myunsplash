import * as Stl from '../styles/SingleImage.styled';
import axios from 'axios';

const SingleImage = ({ id, imgLabel, imgLink, getImagesApi }) => {

  const handleDelete = async (e) => {
    e.preventDefault();
    try {

      await axios.delete(`${process.env.REACT_APP_API_URI}/api/img/deleteimg`, {
        data: {
          id: id
        }
      });
      getImagesApi();

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Stl.ImageContainer>
      <img src={imgLink} alt='' />
      <Stl.HoverContent>
        <Stl.HoverButton onClick={handleDelete}>Delete</Stl.HoverButton>
        <Stl.HoverText>{imgLabel}</Stl.HoverText>
      </Stl.HoverContent>
    </Stl.ImageContainer>
  )
}

export default SingleImage;