import React from 'react';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <section className="introduction">
                <h1>Welcome to My Portfolio</h1>
                <p>
                    Hello! I'm [Your Name], a passionate [Your Profession]. 
                    This is a showcase of my work and projects that I've been involved in.
                </p>
            </section>
            <section className="featured-projects">
                <h2>Featured Projects</h2>
                <ul>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                </ul>
            </section>
        </div>
    );
};

export default Home;