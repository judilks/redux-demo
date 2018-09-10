class TodoActions {
    createTodo = (text) => {
        return {
            type:"CREATE_TODO",
            todo: {
                id: '_' + Math.random().toString(36).substr(2, 9),
                text:text
            }
        }
    }

    deleteTodo = (todo) => {
        return {
            type:"DELETE_TODO",
            todo: todo
        }
    }
}

TodoActions = new TodoActions()

export default TodoActions

        