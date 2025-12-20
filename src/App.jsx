import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFound from './pages/NotFound'
import JobPage from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
function App() {
  const addJob = async (newJob) => {
    // console.log(newJob)
    const res = await fetch('http://localhost:5000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return
  }
  const deleteJob = async (id) => {
    // console.log(id)
    const res = await fetch(`http://localhost:5000/jobs/${id}`, {
      method: 'DELETE'
    })
    return
  }
  const updateJob = async (job) => {
    // console.log(job)
    const res = await fetch(`http://localhost:5000/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })
    return
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/job/:id' element={<JobPage deleteJob={deleteJob} />} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path='/jobs' element={<JobsPage />} />
        <Route path='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}
export default App