import React from 'react'

const UserDetails = ({
	singleUsers: {
		name,
		avatar_url,
		location,
		bio,
		login,
		blog,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable
	}
}) => {
	return (
		<div>
			<h1>{name}</h1>
		</div>
	)
}

export default UserDetails
