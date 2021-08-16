import React, {Component} from 'react';
import './FormularioBusqueda.css'


class FormularioBusqueda extends Component {
   
    handleSubmit = (event) => {
        event.preventDefault()
        var filtro = event.target[0].value
        var orden = event.target[1].value
        console.log(filtro)
        console.log(orden)
        // Manejo de datos 
        this.props.onSend(filtro, orden)
    }
    state = {
        orden: 'price_asc'
    }
    handleChange = (event) =>{
        this.setState({
            orden: event.target.value
        })
    }
    render () {
        const styles = {
            border: '1px solid #000',
            padding: '0.3em 0.6em',
            outline: 'none'
        }
        
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    style={styles}
                />
                Ordenar: 
                <select value={this.state.orden} onChange={this.handleChange}>
                    <option value="price_asc">De menor a mayor</option>
                    <option value="price_desc">De mayor a menor</option>
                </select>
                <button>
                    Buscar
                </button>
            </form>
        )
    }
}
export default FormularioBusqueda