export const readLocalStorage = () => {
    const projectsSaved = JSON.parse(localStorage.getItem('Projects')) || [];
    return projectsSaved;
}