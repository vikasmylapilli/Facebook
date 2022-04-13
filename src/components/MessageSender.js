import React, {useState} from 'react';
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import "../style/MessageSender.css";
import { useStateValue } from '../stateProvider';
import firebase from 'firebase';
import db from '../firebase';

function MessageSender() {
    const {user, image} = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();

        db.collection('post').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: image,
            username:user,
            image: imageUrl,
        })
        // some celver db stuff 
        
        setInput('');
        setImageUrl('');
    }
    return (
    <div className='messageSender'>
        <div className='messageSender_top'>
            <Avatar src={image}/>
            <form>
                <input 
                className='messageSender_input'
                value = {input}
                onChange = {(e)=>setInput(e.target.value)}
                type="text" 
                placeholder={`What's on your mind, ${user}`}
                />
                <input
                value={imageUrl}
                onChange= {e=>  setImageUrl(e.target.value) }
                placeholder='image URL(Optional)' />
                <button onClick={handleSubmit} type="submit">
                    Hidden Submit
                </button>
            </form>
        </div>
        <div className='messageSender_bottom'>
            <div className="messageSender__option">
                <VideocamIcon style={{color:"red"}}/>
                <h3>Live Video</h3>
            </div>
            <div className="messageSender__option">
                <PhotoLibraryIcon style={{color:"green"}}/>
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender__option">
                <InsertEmoticonIcon style={{color:"orange"}}/>
                <h3>Feeling/Activity</h3>
            </div>
        </div>
    </div>
  )
}

export default MessageSender