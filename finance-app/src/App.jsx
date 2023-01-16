import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import TrackerApp from './pages/TrackerApp'
import Contact from './pages/Contact'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element ={<TrackerApp />}/>
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  )


  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
