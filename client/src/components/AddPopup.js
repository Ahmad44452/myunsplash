import * as Stl from '../styles/PopupContainer.styled';
import { GreenButton } from '../styles/Buttons.Styled';

const AddPopup = ({ setPopupShowing }) => {



  return (
    <Stl.Background>
      <Stl.Content>
        <Stl.Heading>Add a new photo</Stl.Heading>

        <form>
          <Stl.InputGroup>
            <Stl.InputLabel>Label</Stl.InputLabel>
            <Stl.Input placeholder='Enter the label for your image' />
          </Stl.InputGroup>

          <Stl.InputGroup>
            <Stl.InputLabel>Photo URL</Stl.InputLabel>
            <Stl.Input placeholder='Enter url of your image' />
          </Stl.InputGroup>

          <Stl.ButtonGroup textAlign="right">
            <Stl.CancelButton onClick={() => setPopupShowing(false)}>Cancel</Stl.CancelButton>
            <GreenButton>Submit</GreenButton>
          </Stl.ButtonGroup>
        </form>

      </Stl.Content>
    </Stl.Background>
  )
}

export default AddPopup;