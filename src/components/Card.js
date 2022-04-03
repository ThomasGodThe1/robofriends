const Card = ({name,username,email}) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow'>
			<img src={`https://robohash.org/${username}?100x100`} alt='robots'/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)	
}

export default Card