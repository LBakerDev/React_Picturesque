import React, {Component} from 'react';

class home extends Component {
    render() {
        return (
            <div> 
            <div className="jumbotron jumbotron-fluid text-center">
                     {/*centers text inside jumbotron*/}
                    <div className="container">
                        <h1 className="display-1">Picturesque</h1>
                        <p className="lead">Your photos. Your sharing</p>
                        <p>
                            <a className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" href="pictures/new" role="button"
                                style="text-decoration: none">Add a new Photo</a>
                        </p>
                    </div>
                </div>
            
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

export default home;