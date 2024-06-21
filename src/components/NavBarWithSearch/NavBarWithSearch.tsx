
import { setUser} from '../../redux/userSlice';
import { useSelector, useDispatch } from "react-redux";
import { Input } from '../ui/input';
import { SearchIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { MenuIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const NavBarWithSearch =  (props:any) => {
    const navigate = useNavigate()
	const dispatch = useDispatch()

	const auth = useSelector((state:any) => state.auth)
	const user = useSelector((state:any) => state.user)

	const [sideNav, setSideNav] = useState({isOpen:false,width:'0px'})

    const handlePageNavigation = async (page:string) =>{
        navigate(`/${page}`)
    }




	const handleSideNav =  (request:string) =>{
		if(request === 'open'){
			const screenWidth = window.innerWidth;
            if (screenWidth < 300) {
				setSideNav({isOpen:true,width:'100%'})

            }else{
				setSideNav({isOpen:true,width:'300px'})

			}
			console.log(open)
		} 
		
		if(request === 'close'){
			setSideNav({isOpen:false,width:'0px'})
		}
	}

	const handlePopOver = () =>{
		return(
		<Popover>
			<PopoverTrigger>Open</PopoverTrigger>
			<PopoverContent>Place content for the popover here.</PopoverContent>
		</Popover>
		)
	}

	const hiddenContent =  () =>{
        return (
            <div style={{width: `${sideNav.width}`, transition: '0.25s'}} className="z-10 top-0 left-0 fixed h-screen bg-white border-solid border-[1px] border-r-black overflow-x-hidden ">
				<div className="flex justify-end">
					<p onClick={() => { handleSideNav('close'); }}>close</p>

				</div>
				<div onClick={()=>{handlePageNavigation('')}}>
					<p>Page Link 1</p>
				</div>	
				<div>
					<p>Page Link 2</p>
				</div>	
				<div>
					<p>Page Link 3</p>
				</div>						
				<div>
					<p>Page Link 4</p>
				</div>	


            </div>
        );
	}

  	return (

		<div id='navbar-with-search' className="w-[100%] flex  border-black border-solid border-[1px]">

				{hiddenContent()}

				{/* Div for menu icon and logo */}
				<div id='menu-and-logo' className='flex w-[150px]  border-black border-dashed border-[1px]'>
					<MenuIcon className="mt-[10px] ml-[10px] border-black border-solid border-[1px] rounded-[5px]" size={30} strokeWidth={1} onClick={()=>{handleSideNav('open')}}/>
					<p  onClick={()=>{handlePageNavigation('')}} className="mt-[10px] ml-[10px] text-[24px]">Logo</p>					
				</div>

				{/* Div for search input, and popover with user avatar image. */}
				<div id='search-and-avatar' className=' flex justify-end w-[100%] border-black border-solid border-[1px] '>

					<div id='search-div' className='flex justify-end mr-[35px] w-[100%] border-black border-solid border-[1px] '>
						<div className='flex justify-end w-[100%] max-w-[770px] h-[40px] border-black border-dashed border-[1px] rounded-[5px]'>
							<Input className='h-[100%] w-[300px]'/>
							<SearchIcon className='ml-[20px] mr-[5px] mt-[5px]' size={32} strokeWidth={1.5} />
						</div>
						
					</div>

					{/* divider */}
					<div className='h-[35px] mt-[5px] border-grey border-solid border-[1px]'></div>

					<div id='popover-avatar-div' className=' ml-[20px] w-[auto] border-black border-solid border-[1px]  flex justify-end'>
						<Popover>
							<PopoverTrigger>
								<Avatar>
									<AvatarImage src="https://github.com/shadcn.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
							</PopoverTrigger>
							<PopoverContent className='w-[200px] mt-[10px]' >
								<div onClick={()=>{handlePageNavigation('user/1')}}>
									<p>View Account</p>
								</div>
								<div>
									<p>Logout</p>
								</div>
								
							</PopoverContent>
						</Popover>
					</div>

				</div>
		</div>
	
  	);
};

export default NavBarWithSearch;

