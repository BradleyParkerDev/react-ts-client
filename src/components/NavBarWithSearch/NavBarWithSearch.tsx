
import { setUser} from '../../redux/userSlice';
import { useSelector, useDispatch } from "react-redux";

import { Button } from "../ui/button";
import { LayoutGridIcon } from "lucide-react";
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

	const hiddenContent =  () =>{
        return (
            <div style={{width: `${sideNav.width}`, transition: '0.25s'}} className="z-10 top-0 left-0 fixed h-screen bg-white border-solid border-[1px] border-r-black overflow-x-hidden ">
				<div className="flex justify-end">
					<p onClick={() => { handleSideNav('close'); }}>close</p>

				</div>
				<div onClick={()=>{handlePageNavigation('')}}>
					<p>Home</p>
				</div>	
				<div>
					<p>Explore Categories</p>
				</div>	
				<div>
					<p>Read Later</p>
				</div>						
				<div>
					<p>user</p>
				</div>	


            </div>
        );
	}

  	return (

		<div className="w-screen flex dashed-outline">

				{hiddenContent()}

				<MenuIcon className="mt-[20px] ml-[20px]" size={36} strokeWidth={2} onClick={()=>{handleSideNav('open')}}/>
				<p  onClick={()=>{handlePageNavigation('')}} className="font-bungee-shade text-[40px]">Logo</p>
		</div>
	
  	);
};

export default NavBarWithSearch;

