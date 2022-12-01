import React, {Component} from 'react';
import CardList from '../components/CardList';
import {People} from '../People';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
 

class App extends Component {
	constructor(){
		super();
		this.state={ //burada this.state yaparken state'i deklere etmeden nasıl kullandı?
			People:People,
			searchfield:''
		}
	}


	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({People:users}))
	}

	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value})
		
		
	}

	render(){
		const person=this.state.People.filter(person=>{
		return person.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return( 
		<div className='tc'>
			<h1 className='f1'>Robotlar</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
      			<CardList people={person}/>
      		</Scroll>
    	</div>
		);

	}
	
}

export default App;