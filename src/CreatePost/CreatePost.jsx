import React, { useState } from "react";
import "./CreatePost.css";
import Home from "../Home Component/Home";

const CreatePost = ({posts, setPosts, AddPosts, createPosts, handleImageUpload, imageUrl}) => {
  
  console.log(posts)
  return (
    <div>
      <form action="">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          value={posts.title}
          onChange={AddPosts}
          className='input__title'
        />
        <br />

        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          value={posts.description}
          placeholder="description"
          onChange={AddPosts}
          className='input__description'
        ></textarea>
        <br />

        <input type="file" accept="image/*" onChange={handleImageUpload} className='image__upload' />
      
      <br />

        <button onClick={createPosts}className='create__post'>Create post</button>
      </form>

      
    </div>
  );
};

export default CreatePost;
