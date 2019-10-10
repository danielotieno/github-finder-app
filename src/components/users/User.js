import React, { useState, useEffect } from 'react'
import Spinner from '../layout/Spinner'
import UserDetails from './UserDetails'
import Axios from 'axios'

const User = () => {
	const {
		REACT_APP_CLIENT_ID: CLIENT_ID,
		REACT_APP_SECRET_ID: SECRET_ID
	} = process.env

	const [singleUsers, setSingleUsers] = useState({})
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		getSingleUser()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const getSingleUser = async username => {
		setLoading(true)

		const githubUser = await Axios.get(
			`https://api.github.com/users/${username}?client_id=${CLIENT_ID}&client_secret=${SECRET_ID}`
		)
		const { data } = githubUser

		console.log(data)

		setSingleUsers(data)

		setLoading(false)
	}

	if (loading) {
		return <Spinner />
	} else {
		return (
			<div>
				<div className="grid-3">
					<UserDetails key={singleUsers.id} singleUsers={singleUsers} />
				</div>
			</div>
		)
	}
}

export default User
