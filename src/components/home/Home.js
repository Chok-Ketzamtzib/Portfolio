import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <img className="home-icon" src='img/bulldog_bolt.jpg'></img>
                <h1 className="welcome-header">William J. Wakefield
                </h1> 
                <h2 className="welcome-header">----------------------------- 
                </h2> 
                <h2> Applied Mathematics {"&"} Computer Science @ Kettering University
                </h2>
                <Link className="button-link" to="/services">
                    <Button variant="contained" color="primary">
                        Let us take care of the magic for you!
                    </Button>
                </Link>
            </div>
        );
    }
}

export default Home;