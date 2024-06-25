import {Link, useNavigate} from 'react-router-dom'

//////////////////
  // Style Objects
  //////////////////
  const divStyle = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  }

  const titleStyle = {
    textAlign: "center",
    color: "#006643",
    fontSize: '4em'
  }


const Post = ({post, deleteBlog}) => {
  const navigate = useNavigate()

  const handleDelete = (event) => {
    event.preventDefault()
    deleteBlog(post.id)
    navigate('/')
  }

  return (
    <div style={divStyle}>
      <Link to={`/post/${post.id}`}>
        <h1 style={titleStyle}>{post.Title}</h1>
      </Link>      
      <h2>{post.Body}</h2>
      <form onSubmit={handleDelete}>
        <input type='submit' value='Delete Blog' />

      </form>
    </div>
  )

}

export default Post