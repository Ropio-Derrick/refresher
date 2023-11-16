import { useState } from 'react'
import Lister from './Lister'
import Blogsdata from './Blogsdata'
const index = () => {
  const blogs = Blogsdata
    

  
    return (
    <div>
      <Lister blogs={blogs} />
      
        
    </div>
  )
}

export default index