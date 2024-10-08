import { useState, useRef, useContext } from "react"
import { saveLocalStorage } from "../../lib/saveLocalStorage"
import { SavedContext } from "../../contexts/saved-context"
export const ModalAddProject = () => {
    const [projectName, setProjectName] = useState("")
    const [alert, setAlert] = useState(false)
    const closeButtonRef = useRef(null);

    const { setSaved } = useContext(SavedContext)

    const handleSave = () => {
        if (!projectName) return setAlert(true)
        saveLocalStorage(projectName)
        setAlert(false)
        setSaved(true);
        setTimeout(() => {
            setSaved(false);
        }, 500);
        setProjectName("")
        closeButtonRef.current.click();
    }
    return (
        <>
            <div className="modal fade" id="AddProjectModal" tabIndex="-1" aria-labelledby="AddProjectModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="AddProjectModalLabel">Add New Project</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group m-0">
                                <input type="text" className="form-control" placeholder='Project Name' value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                            </div>
                            {alert &&
                                <div className="alert alert-danger mt-3" role="alert">
                                    Enter a name
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

        </>

    )
}