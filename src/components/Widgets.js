import React from 'react'
import '../style/Widgets.css'

function Widgets() {
  return (
    <div className='widgets'>
        <iframe src="https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap" 
        width="340"
        height="100%"
        style={{border:"none", overflow:"hidden"}}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow='encrypted-media'
        ></iframe>
    </div>
  )
}

export default Widgets