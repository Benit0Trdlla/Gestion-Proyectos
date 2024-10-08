// import { useState } from 'react'
import './App.css'
import { Button, ModalAddProject, ModalAddTask, Accordion } from "./components"
import SavedContextProvider from "./contexts/saved-context"
function App() {
  return (
    <>
      <h1 className='text-center p-1 m-3'>Tu Gestor de Proyecto</h1>
      <div className='d-flex left gap-2'>
        <Button target="AddProjectModal" label="Add Project">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </Button>
        <Button target="AddTaskModal" label="Add Task">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
          </svg>
        </Button>
      </div>

      <SavedContextProvider>
        {/* Modals */}
        <ModalAddProject />
        <ModalAddTask />

        <hr />

        <div className="rounded">
          <Accordion />
        </div>
      </SavedContextProvider>
    </>
  )
}

export default App
