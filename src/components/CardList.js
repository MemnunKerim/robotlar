import React from 'react';
import Card from './Card';


const CardList =({people}) => { // standart bir syntax, eğer component(props) kullanacaksan ilgili component class'ından extend ediyoruz.
	// Componenttan extend edilen classlarda render() kullanmak bi zorunlulukmuş.
	const cardArray=people.map((user,i)=>{
		return <Card key={i} id={people[i].id} name={people[i].name} email={people[i].Email} /> 
	})
		return(
		 <div>
		 	{cardArray}     
		 </div>
		);
}
export default CardList;
