import {useMemo, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const Form = (props) => {

  const navigate = useNavigate()
  const params = useParams()

  //Will get current post here for edit"
  const currentPost = useMemo(() => props.posts.find(post => post.id === parseInt(params.id)), [params.id, props.posts])

  const[formData, setFormData] = useState(
    props.formType === 'new' ? {
      Title: '',
      Body: '',
    }: {
      Title: currentPost.Title,
      Body: currentPost.Body,
      id: parseInt(currentPost.id)
    }
  )
  const handleChange = (event) => {
    setFormData((prev) => (
      {
        ...prev,
        [event.target.name]: event.target.value
      }
    ))
  }

  const handleSubmission = (event) => {     //Here, we need to bring our "event" object because we are waiting for that event on submit
    event.preventDefault()    //To disable default functinality with our form.
    props.handleSubmit(formData, props.formType)
    //Then, after we submit everything here and we pass the information fetch, let's go ahead and navigate to '/':
    navigate('/')      //To go back to the home page.
  }
  return (
    <form onSubmit={handleSubmission} className='Form'>
      <h3 className = 'EditTitle'>Title</h3>
      <input className='input'
        type='text'
        onChange={handleChange}
        value={formData.Title}
        name='Title'
      />

      <h3>Body</h3>
      <input className='Desc'
        type='text'
        onChange={handleChange}
        value={formData.Body}
        name='Body'
      />

      <input type='submit' value={props.buttonLabel}/>

    </form>
  )

}

export default Form