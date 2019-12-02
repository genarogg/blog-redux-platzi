import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Tabla = (props) => {

	const ponerFilas = () => props.usuarios.map((usuario, key) => (
		<tr key={ usuario.id }>
			<td>
				{ usuario.name }
			</td>
			<td className="hidden">
				{ usuario.email }
			</td>
			<td>
				{ usuario.website }
			</td>
			<td>
				<Link to={ `/publicaciones/${key}` }>
					<div className="eye-solid icon"></div>
				</Link>
			</td>
		</tr>
	));

	return (
		<table className="tabla">
			<thead>
				<tr>
					<th>
						Nombre
					</th>
					<th className="hidden">
						Correo
					</th>
					<th>
						Enlace
					</th>
					<th>ver</th>
				</tr>
			</thead>
			<tbody>
				{ ponerFilas() }
			</tbody>
		</table>
	)
}

const mapStateToProps = (reducers) => {
	return reducers.usuariosReducer;
};

export default connect(mapStateToProps)(Tabla);