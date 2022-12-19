import React from 'react'
import MarkdownView from 'react-showdown';
import { useNavigate } from 'react-router-dom';

function NotFound() {
const markdown = `###Ooooops !! You weren't supposed to see this !! The page you're looking for no longer exists :dash: :exclamation:
`
const navigate = useNavigate()
  return (
    <div className='not-found'>
<MarkdownView markdown={markdown} options={{emoji: true}} />
    <button onClick={()=> navigate("/")}>Return to the home page</button>
    </div>
  )
}

export default NotFound;