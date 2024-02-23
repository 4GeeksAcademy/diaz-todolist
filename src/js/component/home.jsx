import React, {useState} from "react";


//create your first component
const Home = () => {
	const [task, setTask] = useState('');
  	const [tasksList, setTasksList] = useState([]);

	const handleTask = (e) => {
		if (e.key == "Enter") {
			setTasksList([...tasksList, 
			{
				label: task,
				done: false,
	
			}])
		}

		setTask(e.target.value);
	}

	return (<>
		<h1>To do List {task}</h1>
		<input type="text" placeholder="Task" 
		onKeyUp={ (evt)=> handleTask(evt) }/>

		{tasksList.map((toDo , index)=> {
			return <div key={index}>
				{toDo.label}
			</div>
		})}
	
	</>

	)
};

export default Home;