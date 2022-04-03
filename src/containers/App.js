import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import {robots} from './robots'
import React,{Component,useState} from 'react';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundry';
import './App.css'

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots:[],
			searchfield:''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(robots=>this.setState({robots}))
	}

	render() {
		const filteredRobots = this.state.robots.filter(rob=>rob.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))

		if(!filteredRobots.length) return <h1>Loading</h1>
		else return (
		<div className='tc'>
			<h1 className='fi'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />				
					</ErrorBoundary>	
			</Scroll>
		</div>
			)
	}
}

// const App = () => {
// 	const [searchField,setSearchField] = useState('')

// 	const onSearchChange = (event) => {
// 		setSearchField(event.target.value)
// 	}

// 	const filteredRobots=robots.filter(robots=>{return robots.name.toLowerCase().startsWith(searchField)})

// 	return (
// 		<div className='tc'>
// 			<h1 className='fi'>RoboFriends</h1>
// 			<SearchBox searchChange={onSearchChange}/>
// 			<CardList robots={filteredRobots} />
// 		</div>
// 		)	
// }
	

export default App