import React, {Component} from 'react';
import './Main.css';



class Main extends Component{

    state = {
        slogan : "La plataforma número 1 en preparación para ingreso a la máxima casa de estudios"
    }

 testimonials = {
    opinion1 :"\"Dyunamite vino a revolucionar la forma de prepararse para ingresar al nivel superior, en formas tan relevantes que se ha convertido en una organización en favor de la educación no solo a nivel nacional sino internacional\"",
    opinion2 :"\"No tenía dinero para pagar un curso de preparación.Sinceramente creo que es la razón por la cual me quedé\"",
    opinion3 :"\"La estructura pedagógica del sitio es completamente un asunto coyuntural hablando en todos los niveles académicos.Es sorprendentemente simple y eficiente\"",
    opinion4 :"\"Nada me había motivado antes.Es de lo mejor que he probado.Dediqué cerca de una hora diaria durante 3 meses y vaya que aprendí como no tienes idea\""
 }

 autorsName = {
     autor1: "Richard Gerver",
     autor2: "Ximena Rayón",
     autor3: "César Bona",
     autor4: "José Pérez",
 
 }
 autorInfo = {
    autor1Info: "Profesor, investigador y precursor de la nueva educación.Creador del metodo Flipped Classroom",
    autor2Info: "Estudiante de medicina FES Iztacala, 17 años, Oaxaca",
    autor3Info: "Profesor Español, Ganador del Global Teacher prize",
    autor4Info: "Estudiante de CU, 19 años, CDMX",

 }

    render(){
        return(
    <div>
        <p className="tituloAlineado">
        <span className="titulo">DY</span>
        <span className="unam">UNAM</span>
        <span className="titulo">ITE</span>
        </p>
        <p className = "slogan" >{this.state.slogan}</p>
        
    <div> 
    <p className="comofunciona">¿Cómo funciona Dyunamite?</p>
    </div>




        <div className= "container"> 

            <div className="col-sm-3">
             <p className = "opinion">{this.testimonials.opinion1}</p>
             <p className = "autorName">{this.autorsName.autor1}</p>
             <p className = "autorInfo">{this.autorInfo.autor1Info}</p>
            </div>

            <div className="col-sm-3">
             <p className = "opinion">{this.testimonials.opinion2}</p>
             <p className = "autorName">{this.autorsName.autor2}</p>
             <p className = "autorInfo">{this.autorInfo.autor2Info}</p>
            </div>

            <div className="col-sm-3">
             <p className = "opinion">{this.testimonials.opinion3}</p>
             <p className = "autorName">{this.autorsName.autor3}</p>
             <p className = "autorInfo">{this.autorInfo.autor3Info}</p>
            </div>

            <div className="col-sm-3">
             <p className = "opinion">{this.testimonials.opinion4}</p>
             <p className = "autorName">{this.autorsName.autor4}</p>
             <p className = "autorInfo">{this.autorInfo.autor4Info}</p>
            </div>

        </div>
    </div>
        )


    }



}


export default Main;

