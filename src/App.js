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
const apiURL = 'http://localhost:8000'


function App() {
  //setup state for our Posts

  const [posts, setPosts] = useState([])


  return (
    <div className="App">
      <h1>Dawit's Blog</h1>
      <Routes>
        <Route
          exact 
          path="/"
          element={<AllPosts posts={posts} />}
        />
        <Route
          exact 
          path="/post/:id"
          element={<SinglePost posts={posts} />}
        />
        <Route
          exact 
          path="/new"
          element={<Form />}
        />
        <Route
          exact 
          path="/edit/:id"
          element={<Form posts={posts}/>}
        />
         
        
      </Routes>
     
    </div>
  );
}

export default App;
