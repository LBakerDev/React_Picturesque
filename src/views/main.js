import React, { Component } from 'react';


class Main extends Component {
    render() {
        return(
            <div>
            <div className="jumbotron jumbotron-fluid text-center">
            {/*centers text inside jumbotron*/}
           <div className="container">
               <h1 className="display-1">Picturesque</h1>
               <p className="lead">Your photos. Your sharing</p>
               <p>
                   <a className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" href="pictures/new" role="button"
                       >Add a new Photo</a>
               </p>
           </div>
       </div>
       {React.cloneElement(this.props.children, this.props)}
       </div>
        )
    }
}

export default Main;