import { useState, useRef, useContext } from "react"
import { readLocalStorage } from "../../lib/readLocalStorage"
import { SavedContext } from "../../contexts/saved-context"
export const ModalAddTask = () => {
    const [projectSelected, setProjectSelected] = useState("")
    const [alert, setAlert] = useState(false)
    const [taskName, setTaskName] = useState("")

    const { setSaved } = useContext(SavedContext)

    const closeButtonRef = useRef(null);
    const savedProjects = readLocalStorage()
    const projectNames = savedProjects.map(project => project.projectName);

    const handleSave = () => {
        if (!taskName) return setAlert(true)

        // Buscar el proyecto correspondiente
        const projectIndex = savedProjects.findIndex(project => project.projectName === projectSelected);

        if (projectIndex !== -1) {
            // Si el proyecto existe, añadir la tarea al array de tareas
            savedProjects[projectIndex].tasks = savedProjects[projectIndex].tasks || []; // Asegúrate de que el array de tareas existe
            savedProjects[projectIndex].tasks.push(taskName); // Añadir la tarea
        }

        // Guardar los cambios en el localStorage
        localStorage.setItem('Projects', JSON.stringify(savedProjects));

        setAlert(false)
        setSaved(true);
        setTimeout(() => {
            setSaved(false);
        }, 500);
        setTaskName("")
        closeButtonRef.current.click();
    }
    return (
        <div className="modal fade" id="AddTaskModal" tabIndex="-1" aria-labelledby="AddTaskModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="AddTaskModalLabel">Add Task to a Project</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Select Project</label>
                            <select className="form-select" id="inputGroupSelect01" value={projectSelected} onChange={(e) => setProjectSelected(e.target.value)}>
                                {projectNames.map(name => (
                                    <option key={name} >{name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder='Task to do...' value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                        </div>
                        {alert &&
                            <div className="alert alert-danger mt-3" role="alert">
                                Enter a Task to do
                            </div>
                        }
                    </div>
                    <div className="modal-footer">
                        <button ref={closeButtonRef} type="button" className="d-none btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSave}>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}