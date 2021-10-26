import React, { Component } from "react";
import { connect } from "react-redux";

import PostsList from "../components/PostsList";
import { fetchPosts } from "./redux";

class Posts extends Component {
  fetchData = () => {
    this.props.fetchPosts();
  };
  render() {
    const { posts, isLoading } = this.props;
    return (
      <div className="container">
        <h2>Posts</h2>
        {isLoading && <p>Loading...</p>}
        <button onClick={this.fetchData}>Fetch Posts</button>
        <PostsList posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  isLoading: state.posts.isLoading,
  isError: state.posts.isError
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => {
    dispatch(fetchPosts());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
