import React from 'react'
import MarkdownView from 'react-showdown';

function NotFound() {
const markdown = `###OUPS il semble que tu te sois perdu !! Retourne vite à l'accueil :dash: :exclamation:
`
  return (
    <div className='not-found'>
<MarkdownView markdown={markdown} options={{emoji: true}} />


    </div>
  )
}

export default NotFound;