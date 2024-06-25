import './App.css';
//import components
import AllPosts from './pages/AllPosts'
import SinglePost from './pages/SinglePost'
import Form from './pages/Form'

//import hooks
import {useState, useEffect} from 'react'

//import components from React Router
import {Route, Routes} from 'react-router-dom'

//OUR API URL
const apiURL = REACT_APP_BACKEND_URL || 'http://localhost:8000'


function App() {
  //setup state for our Posts

  const [posts, setPosts] = useState([])

  //functions

  //Define a function for get:
  const getBlogs = async () => {
    const response = await fetch(apiURL + '/blogs/')
    const data = await response.json()
    console.log(data)
    setPosts(data)
  }


  //Define a function for our Create & Edit:

  const handleFormSubmission = async (data, type) => {
    if(type === 'new'){     //If new, we are creating a resource    
    const response = await fetch(`${apiURL}/blogs/`, {
      method: 'post',
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    getBlogs()
  } else {
    const response = await fetch(`${apiURL}/blogs/${data.id}/`, {         //Here, data is bubbling up from Form.js
      method: 'put',
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })     
    getBlogs()
  }
  }

  //Define a function for delete:

  const deleteBlog = async (id) => {
    const response = await fetch(`${apiURL}/blogs/${id}/`,
    {
      method: 'delete'
    })
    getBlogs()
  }


  //useEffect
  useEffect(() => {
    getBlogs()
  }, [])


  return (
    <div className="App">
      <h1>Dawit's Blog</h1>
      <Routes>
        <Route
          exact 
          path="/"
          element={<AllPosts posts={posts} deleteBlog ={deleteBlog} />}
        />
        <Route
          exact 
          path="/post/:id"
          element={<SinglePost posts={posts} />}
        />
        <Route
          exact 
          path="/new"
          element={<Form posts={posts} handleSubmit={handleFormSubmission} buttonLabel='Add Blog'
          formType='new'/>} //Here, we are passing the "handleSubmit", "buttonlabel", and "formType" props to Form.js.
        />
        <Route
          exact 
          path="/edit/:id"
          element={<Form posts={posts} handleSubmit={handleFormSubmission} buttonLabel='Edit Blog' formType='edit'/>}
        />
         
        
      </Routes>
     
    </div>
  );
}


export default App;
