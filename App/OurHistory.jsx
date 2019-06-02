import React, {Component} from 'react';
import './OurHistory.css'



class OurHistory extends Component
{
    state ={
        historyParagraph:"Era una mañana de primavera cuando me di cuenta de que la verdadera libertad financiera, " +
         "\n y lo que todos conocen como prosperidad económica esta directamente vinculada al conocimiento. No se trataba " +
         "\n de tan solo estudiar y obtener buenas notas, sino ser capaz de aplicar lo aprendido. Aprendí que eso se llama " +
         "\n sabiduría. Lo entendí cuando en 2009 recibí los resultados mi examen de ingreso a la universidad con profunda "+
         "\n decepción. No pude entrar a la escuela aunque me esforcé toda la prepa para alcanzar mis meta de un buen promedio. "+
         "\n Pero parecía ahora irrelevante. A partir de ese momento comencé a tornarse claro para mí que la vida no se trataba "+
         "\n solo de cursar la escuela sino de obtener conocimiento valioso. Mi familia que siempre había sido de recursos muy "+
         "\n limitados me expuso la opción de desplazarme a la biblioteca y consultar el mejor material de preparación para "+
         "\n costear el curso de preparación de ingreso a la facultad de ingeniería. Pero yo dentro de mí no confiaba mucho "+
         "\n todavía en mi capacidad después de descubrir que no pase el examen. Necesitaba mejorar por mucho mis habilidades, " +
         "\n pero aún mas aumentar mi sed de obtener conocimiento y dejar de perder el tiempo con trivialidades. Así pues comencé "+
         "\n a estudiar diariamente basado en un libro que se llamaba “aprendiendo a aprender”. Y fue eso lo que cambio mi vida. "+
         "\n No se trata del tiempo sino de las motivaciones internas y nuestras creencias lo que limitan nuestra capacidad de "+
         "\n conocer y aprender. Tenia que saber por mi mismo que podía quedarme en la escuela sin importar nada. Estudie todos "+
         "\n los días enfocado, alimentándome de forma diferente, con una dieta diferente , con un enfoque diferente. Me sentía "+
         "\n pleno. Ya no estudiaba para pasar sino para aprender más. Mi sed de conocimiento no ceso desde entonces y ahora  "+
         "\n comparto lo aprendido tras ese año en el que me di cuenta que todo lo que necesitaba era ser un estudiante feliz "+
         "\n que no es otra cosa que un estudiante organizado disciplinado y deseoso de aprender."+
         "\n Ojalá que sea mi vida y no las voces de los otros que se quedaron con mi ayuda lo que te convenza de que puedes "+
         "\n ser realmente exitoso, y entrar a la máxima casa de estudios."
        
    }

    render()
    {   
        return(
            <div>
                <p className= "slogan tituloAlineado">Nuestra Historia</p>
                <p className="opinion">{this.state.historyParagraph}</p>
            </div>

      )
      
    }

}
    export default OurHistory;

