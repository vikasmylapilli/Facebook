import React from 'react'
import "../style/StoryReel.css"
import Story from './Story'

function StoryReel() {
  return (
    <div className='storyReel'>
        <Story  image="https://pbs.twimg.com/media/FOllH4nacAAoH7z?format=jpg&name=small"
        profileSrc="https://pbs.twimg.com/media/FORltlTaMAASTMC?format=jpg&name=small"
        title="GoodAfternoon Tweeps"/>
        <Story image="https://pbs.twimg.com/media/FOw6RHHaQAEJopz?format=jpg&name=small"
        profileSrc="https://pbs.twimg.com/media/FOs2H5vVgAMiy8A?format=jpg&name=small"
        title="The heart & soul"/>
        <Story image="https://pbs.twimg.com/media/FOyy9IMaUAA4ECi?format=jpg&name=small"
        profileSrc="https://pbs.twimg.com/media/FOwWKonacAUw-wS?format=jpg&name=small"
        title="Komaram Bheemudo"/>
        <Story image="https://pbs.twimg.com/media/FOwZkseaQAI8Sp-?format=jpg&name=small"
        profileSrc="https://pbs.twimg.com/media/FOqzYxJaMAAlI-b?format=jpg&name=small"
        title="Congratulations"/>
        <Story image="https://pbs.twimg.com/media/FNtbvGpakAENLIc?format=jpg&name=small"
        profileSrc="https://pbs.twimg.com/media/FKHDprzVcAEyPag?format=jpg&name=small"
        title="very happy birthday"/>

    </div>
  )
}

export default StoryReel