import { readLocalStorage } from "./readLocalStorage"
export const deleteTask = (projectIndex, taskIndex) => {
    const savedProjects = readLocalStorage()
    savedProjects[projectIndex].tasks.splice(taskIndex, 1)
    localStorage.setItem('Projects', JSON.stringify(savedProjects))
}