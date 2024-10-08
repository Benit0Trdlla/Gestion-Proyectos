import { useState, useEffect, useContext } from "react"
import { readLocalStorage } from "../../lib/readLocalStorage"
import { deleteProject } from "../../lib/deleteProject"
import { deleteTask } from "../../lib/deleteTask"
import { SavedContext } from "../../contexts/saved-context"
export const Accordion = () => {
    const [result, setResult] = useState([])

    const { save, setSaved } = useContext(SavedContext)

    useEffect(() => {
        setResult(readLocalStorage())
    }, [save])

    const handleDeleteProject = (index) => {
        deleteProject(index)
        setSaved(true);
        setTimeout(() => {
            setSaved(false);
        }, 500);
    }

    const handleDeleteTask = (projectIndex, taskIndex) => {
        deleteTask(projectIndex, taskIndex)
        setSaved(true);
        setTimeout(() => {
            setSaved(false);
        }, 500);
    }
    return (
        <>
            {result.map((project, index) => (
                <div className="accordion" id="accordionExample" key={index}>
                    <div className="accordion-item mb-3 rounded" >
                        <h2 className="accordion-header d-flex">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded="false"
                                aria-controls={`collapse${index}`}
                            >
                                <button className="btn btn-danger btn-sm ms-0 me-2" onClick={() => handleDeleteProject(index)}>X</button>
                                {project.projectName}
                            </button>
                        </h2>
                        <div
                            id={`collapse${index}`}
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                {project.tasks.length === 0 && <p>No hay tareas</p>}
                                {project.tasks.map((task, taskIndex) => (
                                    <ul key={taskIndex}>
                                        <li style={{ listStyle: 'none' }} className="d-flex justify-content-between align-items-center">
                                            {task}
                                            <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTask(index, taskIndex)}>X</button>
                                        </li>
                                        <hr />
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}