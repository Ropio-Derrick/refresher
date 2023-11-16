import React from 'react'

const Lister = (props) => {
  const blog = props.blogs
  return (
    <div>
      {blog.map((blog)=>(
        <div>
          <h1>{blog.title}</h1>
          <h1>{blog.content}</h1>
          <h1>{blog.authur}</h1>
        </div>
      ))}
    </div>
  )
}

export default Lister