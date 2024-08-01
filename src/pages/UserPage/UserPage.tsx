import React from 'react'
import LoginUserForm from '@/components/LoginUserForm/LoginUserForm'
import RegisterUserForm from '@/components/RegisterUserForm/RegisterUserForm'
import DeleteUserButton from '@/components/DeleteUserButton/DeleteUserButton'
import UpdateUserPasswordForm from '@/components/UpdateUserPasswordForm/UpdateUserPasswordForm'
import UpdateUserForm from '@/components/UpdateUserForm/UpdateUserForm'
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
            <UpdateUserPasswordForm />
            <br/>
            <UpdateUserForm />
        </div>
    )
}

export default UserPage