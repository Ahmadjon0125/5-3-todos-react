export const ListItem = ({item, todos, setTodos}) => {

	const {id, isComplated, text} = item;

	const handleDeleteTodo =(todoId) =>{
		const filteredTodo = todos.filter(filterId => filterId.id !== todoId)
		setTodos([...filteredTodo]);
	}

	const handleEditTodo = (todoId) => {
		const editedTodo = prompt("Yangi matn kiriting")
		const findedTodo = todos.find(todo => todo.id === todoId)
		findedTodo.text = editedTodo
		setTodos([...todos])
	}

	const handleCheckTodo = (todoId) => {
		const findedTodo = todos.find(todo => todo.id === todoId)
		findedTodo.isComplated = !findedTodo.isComplated
		setTodos([...todos])
	}

	return (
		<li className="d-flex align-items-center mt-3 justify-content-center">
			<div>
				<input onChange={() => handleCheckTodo(id)} defaultChecked={isComplated} className="form-check-input mx-3" type="checkbox" />
				<strong className={isComplated ? "text-decoration-line-through" : "text-secondary"}>{text}</strong>
				<button onClick={() => handleEditTodo(id)} className="btn btn-warning mx-3">Edit</button>
				<button onClick={() => handleDeleteTodo(id)} className="btn btn-danger">Delete</button>
			</div>
		</li>
	)
}