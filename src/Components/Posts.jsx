import React, { Component } from "react";
import axios from "axios";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentWillMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => this.setState({ posts: res.data }));
  }
  render() {
    return <div>Posts</div>;
  }
}

export default Posts;
