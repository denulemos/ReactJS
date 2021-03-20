import React from "react";
import { connect } from "react-redux";

import { fetchTodos } from "../state/actions";

class Todos extends React.Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <div>
        {!this.props.error &&
          this.props.todos.map(todo => {
            return <p key={todo.id}>{todo.title}</p>;
          })}

        {this.props.error && <h2>Error processing your request</h2>}
      </div>
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
