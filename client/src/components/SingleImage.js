import * as Stl from '../styles/SingleImage.styled';

const SingleImage = ({ imgLink }) => {
  return (
    <Stl.ImageContainer>
      <img src={imgLink} alt='' />
      <Stl.HoverContent>
        <Stl.HoverButton>Delete</Stl.HoverButton>
        <Stl.HoverText>Morbi consequat lectus non orci maximus</Stl.HoverText>
      </Stl.HoverContent>
    </Stl.ImageContainer>
  )
}

export default SingleImage;