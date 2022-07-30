import { useState, useRef } from "react"
import "./app.scss"
import {List} from "./components"
import {ListItem} from "./components"


function App() {
	const elInput = useRef()
	
	const [todos, setTodos] = useState(JSON.parse(window.localStorage.getItem("todos")) || [])
	let all = todos.length
	let complated = todos.filter(el => el.isComplated === true).length
	let unComplated = todos.filter(el => el.isComplated === false).length
	console.log(unComplated);
	
	const handleInputValu = (evt) =>{

		evt.preventDefault()
		const newTodo  = {
					id: todos.at(-1)?.id ? todos.at(-1).id + 1 : 1,
					text: elInput.current.value,
					isComplated: false
				}
				setTodos([...todos,newTodo]);
				elInput.current.value = null
			
	}

	window.localStorage.setItem("todos", JSON.stringify(todos))

  return (
    <div className="App">
			<form className="text-center my-5 row d-flex justify-content-center" onSubmit={handleInputValu}>
				<div className="col-3"><input className="me-5 form-control " ref={elInput} type="text" placeholder="Todo..." /></div>
				<button className="btn btn-success col-1" type="submit">Send</button>
			</form>
			{todos.length > 0 && <List>
				{
					todos.map(e => (
						<ListItem key={e.id} item={e} todos= {todos} setTodos= {setTodos} />
					))
				}
			</List>}
			<div className="text-center">
				<button className="btn btn-secondary">All:  <strong>  {all}</strong> </button>
				<button className="mx-3 btn btn-primary">Complated:  <strong>  {complated}</strong> </button>
				<button className="btn btn-info">Uncomplated:  <strong>  {unComplated}</strong> </button>
			</div>
    </div>
  );
}

export default App;
