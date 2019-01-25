import React from 'react';
import './Paginador.css';

const Paginador = ({totalResultados, totalPaginas, paginaActual, paginaClick}) => {
    let paginas = [];
    let i = paginaActual - 4 < 1 ? 1 : paginaActual - 4;
    i = i > (totalPaginas - 9) && (totalPaginas - 9) > 0 ? totalPaginas - 9 : i;
    let f = paginaActual + 4 >= totalPaginas ? totalPaginas : paginaActual + 4;
    f = f < 9 && f > totalPaginas ? 9 : f;

    for (i; i <= f; i++) {
        paginas.push(
            <li className={`page-item ${paginaActual === i ? 'active' : ''}`} key={i}>
                <a 
                    className="page-link" 
                    data-num-pag={i} 
                    href="javascript:void(0)"
                    onClick={paginaClick}
                >{i}</a>
            </li>
        );
    }

    return (
        <div className='row'>
            <div className="col-12">
                <p className="resultados text-right">
                    {`Página ${paginaActual} de ${totalPaginas} (${totalResultados} resultados)`}
                </p>
            </div>
            <div className="col-12">
                <nav>
                    <ul className="pagination pagination-sm justify-content-center">
                        { paginas }
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Paginador;