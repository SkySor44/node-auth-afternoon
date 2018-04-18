import React from 'react';
import {Link} from 'react-router-dom';

export default function Home(props){
    return(
        <div>
            <a href = 'http://localhost:3005/login'><button>Log In Now</button></a>
        </div>
    )
}