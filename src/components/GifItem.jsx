import PropTypes from 'prop-types';
import ReactDOM  from 'react-dom/client';

export const GifItem = ({ title, url, id }) => {
  return (
    <div className="card">
        <img src={ url } alt={ title } />
        <p>{ title }</p>
    </div>
  )
}

  // <React.StrictMode>
  //   <GifItem />
  // </React.StrictMode>


GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
