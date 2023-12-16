import React from "react";
import '../stylesheets/Testimonio.css'
/*Colocamos export antes de function*/
export function Testimonio(props){
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require(`../imagens/${props.imagem}.jpg`)} alt="Foto De Emma"/>
        <div className="contenedor-de-texto-testimonio">
          <p className="nombre-testimonio"><strong>{props.nome}</strong> em {props.pais}</p>
          <p className="cargo-testimonio">{props.cargo}  no <strong>{props.empresa}</strong></p>
          <p className="texto-testimonio">"{props.testimonio} <a href="#"  target="__blank">especial"</a></p>
        </div>
    </div>
    )
}
//Existem dois tipos de exportaçao numerada ou por defcto . um unico componte  seria por defcto mais de um coponente numerada na hora que importar vai er que selecionar qual funçao se refere.
