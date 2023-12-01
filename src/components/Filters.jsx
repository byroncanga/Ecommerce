import {useState} from "react";

const Filters = ({filtro})=>{
    const [minPrecio, setMinPrecio] = useState(0)
    //saca el precio del range y lo envia por el props filtro
    const handleChangeminPrecio =(event)=>{
        event.preventDefault();
        setMinPrecio(event.target.value)         
        filtro((estado) =>({
            ...estado,
            minPrecio:event.target.value
        }))                
    }
    //saca la categoria del option y lo envia por el props filtro
    const handleChangeCategory =(event)=>{    
        filtro(estado =>({
            ...estado,
            category: event.target.value
        }))                
    }    
    
    return (            
        <div className="container bg-light rounded-3 my-4 p-2 d-flex justify-content-around align-items-center">
        <h6>Filtrar Productos</h6>
            <div className="range d-flex gap-2">
                <label htmlFor="customRange1" className="form-label">Precio</label>
                <input type="range" className="form-range" id="customRange1" min="0" max="1000" onChange={handleChangeminPrecio}/>
                <span>${minPrecio}</span>
            </div>
            <div className="d-flex align-items-center gap-3">
            <label htmlFor="categoria">Marca</label>
            <select className="form-select" id="categoria" onChange={handleChangeCategory}>
                <option value="all">all</option>
                <option value="Samsung">Samsung</option>
                <option value="Motorola">Motorola</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Apple">Apple</option>
                <option value="Nokia">Nokia</option>
            </select>
            </div>            
        </div>       
    )
}
export default Filters