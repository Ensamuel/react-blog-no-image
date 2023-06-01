import React from "react";
import { Link } from "react-router-dom";
const Home = ({fillPosts, DeleteRow, imageUrl}) => {
  return (
    <div>
      <h2 className="personal__blog">Personal Blog</h2>
     <Link to='/createpost'><button className="create__post__home"> Create Post</button></Link> 
        {fillPosts.map((item, itemKey) => {
          return (
            <div key={itemKey} className='blog__body'>
              <h2 className="blog__title">{item.title}</h2>
              <p>{item.description}</p>
              {imageUrl && <img src={imageUrl} alt="Preview" className="blog__image"/>}<br/>
              <button className="delete__post" onClick={() => DeleteRow(item)}>Delete Post</button>
            </div>
          );
        })}
      </div>
  );
};

export default Home;
