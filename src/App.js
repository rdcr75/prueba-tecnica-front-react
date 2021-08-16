import React, {useState, useEffect} from 'react';
import TarjetaProducto from './componentes/TarjetaProducto'
import FormularioBusqueda from './componentes/FormularioBusqueda'
// import Paginacion from './componentes/Paginacion'
import './App.css';
import { TablePagination } from '@material-ui/core';

function App() {
  var query = 'tecnologia'
  var sort = 'price_desc'
  var url='http://localhost:8000/api/search?query=' + query + '&sort=' + sort
  const [q,setQuery]=useState()

  var fetchApi = async () => {
    var response = await fetch(url)
    var responseJSON = await response.json()
    setQuery(responseJSON)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  var send = (filtro, orden) => {
    console.log(filtro)
    console.log(orden)
    url = 'http://localhost:8000/api/search?query='+ filtro + '&sort=' + orden
    console.log(url)
    fetchApi()
  }
  
  return (
    <div className="App">
      <h1>Proyecto Ruben Cabrera</h1>
      <div className="product-search">
        <FormularioBusqueda 
          name='buscar' 
          placeholder='Buscar'
          onSend={send}
        />
      </div>
      <div className="products-wrapper">
        {
          !q ? 'Cargando...' : q.map( (item,index) => {
            return <TarjetaProducto 
              name={item.title} 
              price={item.price} 
              available_quantity={item.available_quantity} 
              currency={item.currency_id} 
              image={item.thumbnail} 
              key={index} 
            />
            /*
            return <TablePagination
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
            */
          })
        }
      </div>
    </div>
  );
}

export default App;