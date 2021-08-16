import React, {Component} from 'react';
//import ReactDOM from "react-dom";
import './TarjetaProducto.css'

class TarjetaProducto extends Component {

    state = {
        cantidad: 0
    }
    
    agregar = () => this.setState({
        cantidad: this.state.cantidad + 1
    })
    
    quitar = () => this.setState({
        cantidad: this.state.cantidad  - 1
    })

    limpiar = () => this.setState({
        cantidad: 0
    })

    render () {
        const hasItems = this.state.cantidad > 0
        const activeClass = hasItems ? 'TarjetaProducto-activo' :''
        const claseProducto = 'TarjetaProducto ' + activeClass

        return (
            <div className={claseProducto}>
                <h3>{this.props.name}</h3>
                <div><img src={this.props.image} alt={this.props.image} title={this.props.name} width="200" /></div>
                <div>Cantidad: {this.state.cantidad}</div>
                <button onClick={this.agregar}> + </button>
                <button onClick={this.quitar}> - </button>
                <button onClick={this.limpiar}> Limpiar </button>
                <hr/>
                <p> Precio: ${this.props.price} {this.props.currency}</p>
                <p> Total: {this.props.price * this.state.cantidad}</p>
            </div>
        )        
    }
}

export default TarjetaProducto