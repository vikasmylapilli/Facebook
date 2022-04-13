import { Button } from '@material-ui/core'
import React from 'react'
import { useStateValue } from '../stateProvider';
import "../style/login.css";




function Login() {

    const {signIn} = useStateValue()

    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1024px-Facebook_Logo_%282019%29.svg.png
                " alt="" />
            </div>
            <Button type='submit' onClick={()=>signIn()}>
                Sign In
            </Button>
        </div>
        
    )
}

export default Login