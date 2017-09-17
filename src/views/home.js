import React, {Component} from 'react';

import { render } from 'react-dom'

import Photo from  './photo';

const Home = React.createClass ({
    render() {
        return (
            <div> 
                <div className="container">
                    {/*creating cards here. Looping over photo component*/}
                    {this.props.posts.map((post, i) => 
                        <Photo{...this.props} key={i} i={i} post={post} />)}
                  
                </div>
            </div>
                
            )
    }
});

export default Home;