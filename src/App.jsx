import React, { useState } from "react";
import CreatePost from "./CreatePost/CreatePost";
import Home from "./Home Component/Home";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import './App.css'
const App = (props) => {
  const [posts, setPosts] = React.useState({
    title: "",
    description: "",
  });

  function AddPosts(e) {
    setPosts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const [fillPosts, setFillPosts] = React.useState([]);

  let { title, description } = posts;

  function createPosts(e) {
    e.preventDefault();
    setFillPosts((prev1) => [...prev1, { title, description }]);

    posts.title = "";
    posts.description = "";
  }

  const [isTrue, setIsTrue] = React.useState(true);

  function DeleteRow(i) {
    let total = [...fillPosts];
    total.splice(i, 1);
    setFillPosts(total);
  }

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
{/**  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

   
    const url = URL.createObjectURL(file);
    setImageUrl(url);

    
  }; */}

  
  return (
    <div className="Blog__App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home fillPosts={fillPosts}  DeleteRow={DeleteRow} />} />
        <Route path="/createpost" element={<CreatePost posts={posts} setPosts={setPosts} AddPosts={AddPosts} createPosts={createPosts}  />} />
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
};

export default App;
