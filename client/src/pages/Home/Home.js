import React, { useEffect, useState } from 'react'
import { Container, Jumbotron, Button, Form, FormGroup, Label, Input, } from 'reactstrap';

const Home = () => {


  const [blogState, setBlogState] = useState({
    blog: "",
    blogs: []
  })

  blogState.handleInputChange = event => {
    setBlogState({ ...blogState, [event.target.name]: event.target.value })
  }


  blogState.handleAddBlog = event => {
    event.preventDefault()

    console.log(blogState)


    
  }

  return (
    <>
    <Container>

      <Jumbotron>
        <h1>Write a Blog</h1>
        
        <Form>
          <FormGroup>
            <Input
            type="textarea"
            name="blog"
            value={blogState.blog}
            onChange={blogState.handleInputChange}
            />
            <br />
    
            <Button onClick={blogState.handleAddBlog}>Add Blog</Button>

          </FormGroup>
        </Form>

      </Jumbotron>
    </Container>
    </>
  )
}

export default Home
