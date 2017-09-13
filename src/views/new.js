import React, { Component } from 'react';

class New extends Component {
    render() {
        return (
            <div class="container">
            
                    <h1>Create a new Post</h1>
                    <div>
                        <form action="/pictures" method="POST">
                            {/*"name used to grab info from req.body object"*/}
                            <div class="form-group">
                                <input class="form-control" type="text" name="name" placeholder="name" />
                            </div>
                            <div class="form group">
                                <input class="form-control" type="text" name="image" placeholder="image url" />
                            </div>
                            <div class="form group">
                                <input class="form-control" type="text" name="description" placeholder="description" />
                            </div>
                            <div class="form-group">
                                <button class="btn-block mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Submit</button>
                            </div>
                        </form>
                        <a href="/pictures">Go Back</a>
                    </div>
                    </div>

        )
    }
}

export default New;


