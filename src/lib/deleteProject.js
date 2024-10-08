export const deleteProject = (index) => {
    // Obtener el JSON del localStorage
    var json = JSON.parse(localStorage.getItem('Projects'));
    // Eliminar el elemento por índice
    json.splice(index, 1);
    // Guardar el JSON actualizado en el localStorage
    localStorage.setItem('Projects', JSON.stringify(json));
}