const todos = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_TODO':
      return [
        ...state,
        {
          id: action.todo.id,
          text: action.todo.text,
        }
      ]
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.todo.id)
    default:
      return state
  }
}

export default todos