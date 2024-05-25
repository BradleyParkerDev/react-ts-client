import React from 'react'
import { useParams } from 'react-router-dom'


const AuthenticatedUserPage = () => {
	const { id } = useParams<{ id?: string }>();
	return (
		<div>
			<p>AuthenticatedUserPage</p>
			<br/>
			<p>{`Authenticated User ID: ${id}`}</p>
		</div>
	)
}

export default AuthenticatedUserPage