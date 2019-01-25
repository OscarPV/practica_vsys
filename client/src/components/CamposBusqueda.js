import React from 'react';
import './CamposBusqueda.css';

const CamposBusqueda = ({filtroChange}) => {
    return (
        <form id="filtros-form">
            <div className="form-row">
                <div className="col-md-4 col-12">
                    <input 
                        type='text' 
                        name="usuario" 
                        placeholder='Usuario' 
                        className="form-control form-control-sm"
                        onChange={filtroChange}
                    />
                </div>
                <div className="col-md-4 col-12">
                    <input 
                        type='text' 
                        name="producto" 
                        placeholder='Producto' 
                        className="form-control form-control-sm"
                        onChange={filtroChange}
                    />
                </div>
                <div className="col-md-4 col-12">
                    <div className="form-check text-center">
                        <input 
                            type="checkbox" 
                            name="estatus" 
                            className="form-check-input" 
                            id="estatus"
                            onChange={filtroChange}
                        />
                        <label className="form-check-label" htmlFor="estatus">Activo</label>
                    </div>
                </div>
            </div>        
        </form>
    );
}

export default CamposBusqueda;