export const saveLocalStorage = (projectName, tasks = []) => {
    const projectsSaved = JSON.parse(localStorage.getItem('Projects')) || [];
    projectsSaved.push({ projectName, tasks });
    localStorage.setItem('Projects', JSON.stringify(projectsSaved));
}