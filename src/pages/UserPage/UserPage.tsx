import React from 'react'
import LoginUserForm from '@/components/LoginUserForm/LoginUserForm'
import RegisterUserForm from '@/components/RegisterUserForm/RegisterUserForm'
import DeleteUserButton from '@/components/DeleteUserButton/DeleteUserButton'
import UpdateUserPasswordForm from '@/components/UpdateUserPasswordForm/UpdateUserPasswordForm'
import UpdateUserForm from '@/components/UpdateUserForm/UpdateUserForm'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UserPage = () => {
    const navigate = useNavigate()
    const layout = useSelector((state:any) => state.layout)
    const user = useSelector((state:any) => state.user)

	const auth = useSelector((state:any) => state.auth)

    useEffect(()=>{
        const navigateToAuthenticatedUserPage = async() =>{
            // delay function
            const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

            // 3 second delay
			await delay(3000)
            
            navigate(`/user/${user.userName}`)
        }




        if(auth.isAuth){
            navigateToAuthenticatedUserPage()
        }





    },[auth.isAuth, user])

    return (
        <div>
            {layout.showLoginForm && <LoginUserForm />}
            <br/>
            {!layout.showLoginForm && <RegisterUserForm />}
        </div>
    )
}

export default UserPage