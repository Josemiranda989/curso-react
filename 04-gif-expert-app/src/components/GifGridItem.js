import React from 'react' // imr
import PropTypes from 'prop-types' //impt
export const GifGridItem = ({title, image}) => {
  
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

GifGridItem.propTypes = {
  title: PropTypes.isRequired,
  image: PropTypes.isRequired,
};