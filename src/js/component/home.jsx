import React, { useState } from "react";


const Home = () => {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(-1);
  

  const handleTask = (e) => {
    if (e.key === "Enter") {
      setTasksList([
        ...tasksList,
        {
          label: task,
          done: false
        }
      ]);
      setTask("");
    }
  };

  const toggleTaskDone = (index) => {
    const updatedTasks = [...tasksList];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasksList(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasksList];
    updatedTasks.splice(index, 1);
    setTasksList(updatedTasks);
  };

  return (
    <div className="container text-center mt-5">
      <h1>To do List</h1>
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={(evt) => handleTask(evt)}
        className="mx-auto"
      />

      {tasksList.map((toDo, index) => (
        <div
          key={index}
          className="text-center mt-3"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(-1)}
        >
          <span className={toDo.done ? "text-decoration-line-through" : ""}>
            {toDo.label}
          </span>
          {hoverIndex === index && (
            <>
              <button
                className="btn btn-sm btn-success ms-2"
                onClick={() => toggleTaskDone(index)}
              >
                {toDo.done ? "Undo" : "Done"}
              </button>
              <button
                className="btn btn-sm btn-danger ms-2"
                onClick={() => deleteTask(index)}
              >
                <i class="fa-solid fa-trash"></i>
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
