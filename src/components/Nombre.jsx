import { useState } from 'react';
import imagen from '../assets/vairo2.png'
import './Nombre.css'



function Nombre({producto}) {
    //console.log(producto);
    const {nombre,descripcion,precio,sku,cantidadDisponible,freeShipping}=producto
    console.log(nombre,descripcion,precio,sku,cantidadDisponible,freeShipping);


function compra(e) {
    if (compra!='') {
       console.log('gracias por su compra');
    }
}
const [mostrarValores,setmostarValores]=useState(false)



    return(
        <section className="Card">
           
            <div className="prod">
            <img  className='Vairo' src={imagen} alt="imagen bicicleta" />
                <h2>{nombre.toUpperCase()}</h2>
                <p>{descripcion}</p>
                <h2>${precio}</h2>
                <h5>#{sku}<p>{cantidadDisponible}unidades</p></h5>
                <p><strong>{freeShipping && "envio gratis"}</strong></p>
            </div>
            <div className="btn">
                <button onClick={compra}>comprar</button>
            </div>
            <div>
                <p>{mostrarValores}</p>

            </div>
        </section>
    )
}

export{Nombre}