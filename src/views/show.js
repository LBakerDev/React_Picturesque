import React, {Component} from 'react';


class Show extends Component {
    render() {
        return (
         <div className="container">
            <div className="row">
                
                <div className="col-md-9">
                    <div className="img-thumbnail">
                        <img className="img-fluid" src="<%= picture.image %>"/>
                        <div className="caption-full">
                            <h4 className="pull-right"></h4>
                            <h4>
                                <a href="">
                                    {/* picture.name %>*/}
                                </a>
                            </h4>
                            <p>
                                {/*<%= picture.description%>*/}
                            </p>
                            <p>
                               {/*} <em>Submitted by <%= picture.author.username%></em>*/}
                            </p>
                            {/*<!-- hide edit and delete if not logged in -->*/}
                            {/*<% if(currentUser && picture.author.id.equals(currentUser._id)) { %>*/}
                            <a href="/pictures/<%= picture._id %>/edit">Edit</a>
                            <form id="delete-form" action="/pictures/<%= picture._id %>?_method=DELETE" method= "POST">
                            <button className = "btn btn-danger">Delete</button>
                            </form>
                             } 
    
                        </div>
                    </div>
                    <div className="well">
                        <div className="text-right">
                            <a className="mdl-button mdl-button--raised mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored" href="/pictures/<%= picture._id %>/comments/new"><i className="material-icons">add</i></a>
                        </div>
                       {/*} <% picture.comments.forEach(function(comment) {%>*/}
                            <div className="row">
                                <div className="col-md-12">
                                    {/* show username associated with comment */}
                                   {/* <strong><%= comment.author.username %></strong>*/}
    
                                   
                                    <p>
                                        {/*<%= comment.text%>*/}
                                    </p>
                                    {/*<% if(currentUser && comment.author.id.equals(currentUser._id)) { %>*/}
                                    <a className="btn btn-warning" href="/pictures/<%= picture._id %>/comments/<%=comment.id%>/edit">
                                        Edit
                                    </a>
                                    <form action="/pictures/<%= picture._id %>/comments/<%=comment.id%>?_method=DELETE" method="POST">
                                        <input type="submit" className="btn btn-xs btn-danger" value="Delete"/>
                                    </form>
                                     } 
    
    
                                </div>
                            </div>
    
    
                            })
                    </div>
                </div>
            </div>
            </div>
        )
        
    }
}

export default Show;