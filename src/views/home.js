import React, {Component} from 'react';

import { render } from 'react-dom'

class Home extends Component {
    render() {
        return (
            <div> 
           
            
                <div className="container">
                    {/*creating cards here*/}
                    <div className="row text-center">
            
                        {/* picture.forEach(function(picture) { */}
                            <div className="col-md-6 col-lg-3">
                                <div className="card">
                                    {/*img at the top in order to make fluid*/}
                                    <img className="card-img-top img-fluid" src=""/>
                                    <div className="card-block">
                                        <h4>
                                            Hello
                                        </h4>
                                        <p className="card-text">Description</p>
                                        <a  href="">More</a>
                                    </div>
                                </div>
                            </div>
                              
            
                    </div>
                </div>
                </div>
                
            )
    }
}

export default Home;