import React from 'react'
import LoginUserForm from '@/components/LoginUserForm/LoginUserForm'
import RegisterUserForm from '@/components/RegisterUserForm/RegisterUserForm'
import DeleteUserButton from '@/components/DeleteUserButton/DeleteUserButton'
import UpdatePasswordForm from '@/components/UpdatePasswordForm/UpdatePasswordForm'
const UserPage = () => {
    return (
        <div>
            <LoginUserForm />
            <br/>
            <RegisterUserForm />
            UserPage
            <br/>
            <DeleteUserButton />
            <br/>
            <UpdatePasswordForm />
        </div>
    )
}

export default UserPage