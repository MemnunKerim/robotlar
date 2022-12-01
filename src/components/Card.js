import React from 'react'; //destructring ile component alıp vermeyi de aktif ediyoruz.

const Card =({name,email,id}) => { // standart bir syntax, eğer component(props) kullanacaksan ilgili component class'ından extend ediyoruz.
	// Componenttan extend edilen classlarda render() kullanmak bi zorunlulukmuş.
		return(
		<div className='tc shadow-2 dib b--yellow br3 bg-yellow grow justify-content:center ma2'>
		<img alt='robots' src={`https://robohash.org/${id}`}/>
		<h2>{name}</h2>
		<p>{email}</p>
		</div>
		);
		
	
	
}

export default Card;