import React, { useState, useEffect } from 'react'
import '../style/Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from '../firebase'

function Feed() {

  const [post, setPosts ] = useState([]);

  useEffect(()=>{
    db.collection('post').orderBy("timestamp", 'desc').onSnapshot(
      snapshot=>(setPosts(snapshot.docs.map(doc=>({
        id:doc.id, data: doc.data()
      })))
    ));
  },[])

  return (
  
    <div className='feed'>
        <StoryReel/>
        <MessageSender/>
        {
          post.map(({id, data})=>(
            <Post key={id} 
            profilePic={data.profilePic} 
            message ={data.message}
            timestamp ={data.timestamp}
            username ={data.username}
            image ={data.image}/>
          ))
        }
    </div>
  )
}

export default Feed