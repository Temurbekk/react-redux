import React, { Component } from "react";
import axios from "axios";

class Posts extends Component {
  componentWillMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => console.log(res.data));
  }
  render() {
    return <div>Posts</div>;
  }
}

export default Posts;
