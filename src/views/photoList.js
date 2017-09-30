import React, {PropTypes} from 'react';
import Photo from './photo';

const PhotoList = ({posts}) => {
  return (
    <div>
      <ul>
        {posts.map((post, i) => {
          return (<Photo key={i} i={i} post={post} />);
        })}
      </ul>
    </div>
  );
};

PhotoList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PhotoList;