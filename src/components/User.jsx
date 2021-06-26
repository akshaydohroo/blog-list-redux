import React, { PureComponent } from "react";
import { connect } from "react-redux";
class User extends PureComponent {
  render() {
    return typeof this.props.user === "undefined" ? (
      <div>No user</div>
    ) : (
      <div>{this.props.user.name}</div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
}

export default connect(mapStateToProps)(User);
