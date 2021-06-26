import React from "react";
import { connect } from "react-redux";
import { fetchPostAndUser } from "../actions";
import User from "./User";
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostAndUser();
  }

  render() {
    console.log(this.props.posts);
    return (
      <ul>
        {this.props.posts.map((post) => {
          return (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <User userId={post.userId} />
            </li>
          );
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps, { fetchPostAndUser })(PostList);
