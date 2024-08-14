import React from 'react'
import DeleteUserButton from '@/components/DeleteUserButton/DeleteUserButton'
import UpdateUserPasswordForm from '@/components/UpdateUserPasswordForm/UpdateUserPasswordForm'
import UpdateUserForm from '@/components/UpdateUserForm/UpdateUserForm'
import { useParams } from 'react-router-dom'


const AuthenticatedUserPage = () => {
	const { id } = useParams<{ id?: string }>();
	return (
		<div>
			<p>AuthenticatedUserPage</p>
			<br/>
			<p>{`Authenticated User ID: ${id}`}</p>
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

export default AuthenticatedUserPage