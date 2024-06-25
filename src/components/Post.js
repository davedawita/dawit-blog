import {Link, useNavigate} from 'react-router-dom'

//////////////////
  // Style Objects
  //////////////////
  const divStyle = {
    textAlign: "center",
    border: "3px solid",
    margin: "15px auto",
    width: "60%",
    fontSize: '0.7em',
    backgroundColor: "#caae98",
    height: "200px",
    padding: "20px",

  }

  const titleStyle = {
    textAlign: "center",
    color: "#800000",
    fontSize: '3em',
    textDecoration: 'none',
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
        <input className='deleteBlog'type='submit' value='Delete Blog' />

      </form>
    </div>
  )

}

export default Post