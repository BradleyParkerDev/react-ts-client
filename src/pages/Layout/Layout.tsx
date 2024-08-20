import { Outlet } from 'react-router-dom'
import NavBarWithSearch from '@/components/NavBarWithSearch/NavBarWithSearch'

const Layout =  (props:any) => {


	return (
		<div id='outer-body' className='bg-[lightblue] h-screen w-screen flex justify-center'>
			<div id='content-container' className=' bg-white w-[100%] h-[100%] max-w-[1440px]'>
				<NavBarWithSearch />
				<Outlet />				
			</div>


		</div>
  )
}

export default Layout;