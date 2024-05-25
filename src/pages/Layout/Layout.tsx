import { Outlet } from 'react-router-dom'



const Layout =  (props:any) => {
	return (
		<div className='bg-[lightblue] h-screen w-screen flex justify-center'>
			<div className=' bg-white w-[100%] h-[100%] max-w-[1440px]'>
				<Outlet />				
			</div>


		</div>
  )
}

export default Layout