
/*
Class that calls the posts api on the pictur_esque
server, then handles the response.  The apiBase constant
will need to be updated to reflect the environment.
 */
const apiBase = `http://localhost:8080/api/v1`;

class PostsApi {

  //
  static getLatestPosts() {
    let url = `${apiBase}/posts`;
    return fetch(url)
      .then(response => {
        return response.text();
      })
      .then(body => {
        if (body) {
          return JSON.parse(body);
        }
        return body;
      })
      .catch(err => console.error);
  }
}

export default PostsApi;
