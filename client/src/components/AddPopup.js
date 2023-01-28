import * as Stl from '../styles/PopupContainer.styled';
import { GreenButton } from '../styles/Buttons.Styled';
import { useState } from 'react';
import axios from 'axios';

const AddPopup = ({ setPopupShowing, getImagesApi }) => {

  const [label, setLabel] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await axios.post(`${process.env.REACT_APP_API_URI}/api/img/addimg`, {
        label: label,
        imgurl: imgUrl
      });

      getImagesApi();
      setPopupShowing(false);

    } catch (err) {
      setError(err.response.data.message);
    }

  }

  return (
    <Stl.Background>
      <Stl.Content>
        <Stl.Heading>Add a new photo</Stl.Heading>

        <form onSubmit={handleSubmit}>
          <Stl.InputGroup>
            <Stl.InputLabel>Label</Stl.InputLabel>
            <Stl.Input placeholder='Enter the label for your image' onChange={e => setLabel(e.target.value)} required />
          </Stl.InputGroup>

          <Stl.InputGroup>
            <Stl.InputLabel>Photo URL</Stl.InputLabel>
            <Stl.Input placeholder='Enter url of your image' onChange={e => setImgUrl(e.target.value)} required />
          </Stl.InputGroup>

          <Stl.ErrorMessage>
            {error}
          </Stl.ErrorMessage>

          <Stl.ButtonGroup textAlign="right">
            <Stl.CancelButton type='button' onClick={(e) => { e.preventDefault(); setPopupShowing(false); }}>Cancel</Stl.CancelButton>
            <GreenButton type='submit'>Submit</GreenButton>
          </Stl.ButtonGroup>
        </form>

      </Stl.Content>
    </Stl.Background>
  )
}

export default AddPopup;