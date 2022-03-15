import React from 'react'

export const GifGridItem = ({id, title, image}) => {
    
    console.log(image);
  return (
      <div>
          <img src={image} alt={title} />
          <p>{title}</p>
      </div>
  )
}
