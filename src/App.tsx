import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import UserPage from './pages/UserPage/UserPage'
import AuthenticatedUserPage from './pages/AuthenticatedUserPage/AuthenticatedUserPage'
import Layout from './pages/Layout/Layout'

const router = createBrowserRouter([
	{
		path: "/",
		element:<Layout />,
		children:[
			{
				index:true,
				element: <HomePage/>

			},
			{
				path: "/user",
				element: <UserPage/>
			},
			{
				path: "/user/:id",
				element: <AuthenticatedUserPage/>
			}
		]
	}
])


const App =  (props:any) => {

	return (
		<div >
			<RouterProvider router={router}/>
		</div>
	) 
			
	
}

export default App