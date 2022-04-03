import Card from './Card'

function CardList({ robots }) {
	return (
		<>
			{robots.map((rob,i)=><Card key={i} name={rob.name} username={rob.username} email={rob.email}/>)}
		</>
		)
}

export default CardList