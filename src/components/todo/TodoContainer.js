import { connect } from 'react-redux';
import TodoList from './TodoList'
import TodoActions from '../../actions/TodoActions'

function mapStateToProps(state) {
    return {
        todos: state.todos
    };
}

const mapDispatchToProps = dispatch => ({
    deleteTodo: todo => dispatch(TodoActions.deleteTodo(todo)),
    createTodo: todo => dispatch(TodoActions.createTodo(todo))
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);