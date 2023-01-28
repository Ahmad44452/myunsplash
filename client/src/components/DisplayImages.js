import SingleImage from "./SingleImage";
import * as Stl from '../styles/DisplayImages.styled';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const DisplayImages = () => {
  return (
    <Stl.ImagesContainer>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry gutter="2rem">
          <SingleImage imgLink="https://images.unsplash.com/photo-1674757273875-e47dbfbda82c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80" />
          <SingleImage imgLink="https://images.unsplash.com/photo-1674752271238-507b7de054b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
          <SingleImage imgLink="https://images.unsplash.com/photo-1674754666581-4e6657392655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" />
          <SingleImage imgLink="https://images.unsplash.com/photo-1674757621246-ab7bcaba8bcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" />
          <SingleImage imgLink="https://images.unsplash.com/photo-1674577201145-da3fc3041698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" />
          <SingleImage imgLink="https://images.unsplash.com/photo-1674771217089-a2cc4cda2d0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
          <SingleImage imgLink="https://images.unsplash.com/photo-1674756142722-14266beb51d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
        </Masonry>
      </ResponsiveMasonry>
    </Stl.ImagesContainer>
  )
}

export default DisplayImages;