import React from 'react';
import './ShowPage.css';
import movieclip from '../assets/movieclip.mp4';
import { Link } from 'react-router-dom';

const ShowPage = () => {
    return (
        <div className = "showpage-container">
            <video autoPlay loop muted playsInline id = "background-video ">
                <source src = {movieclip} type ="video/mp4" />
            </video>
            <div className = "overlay">
                <div className ="content">
                    <h1>Track the most popular Movie, shows and more.</h1>
                    <form className="sign-up">
                        <input type="email" placeholder = "Email address" className="email-input" />
                        <Link to ="/login">
                            <button type="submit" className="get-Started-button">get Started</button>
                        </Link>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ShowPage;