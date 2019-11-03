import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super();
		this.state = {
			usuarios: [
				{
					nombre: 'Rodolfo',
					correo: 'rodolfo@platzi.com',
					enlace: 'rodolfo.com'
				},
				{
					nombre: 'Rodolfito',
					correo: 'rodolfo@platzi.com',
					enlace: ''
				},
				{
					nombre: 'Platzi',
					correo: 'info@platzi.com',
					enlace: 'platzi.com'
				}
			]
		}
	}

	

	render() {
		return (
			<div className="margen">
				
			</div>
		)
	}
};

export default App;