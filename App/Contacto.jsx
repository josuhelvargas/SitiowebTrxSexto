import React, {Component} from 'react';
import './Contacto.css'
//import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';



class Contacto extends Component
{ 
    constructor(args){
        super(args)
        this.state ={
           nombre:'',
           correo:'',
           telefono:'',
           mensaje:''
        }
   } 

   handleChange = prop => event => {
   this.setState({ [prop]: event.target.value });
  }


  handleSend = event => {
    const { nombre, correo, telefono, mensaje } = event.target;
    const data = {
      nombre: nombre.value,
      correo: correo.value,
      telefono: telefono.value,
      mensaje: mensaje.value
    }

    axios.post('user/register', data)
        .then(res => {
              console.log('registrado exitosamente')})
        .catch(err => console.log(err));
  
   }


    render()
    {   
        return(
    <div>
                <p className= "slogan tituloAlineado">Contacto</p>
               
        <div className= "container"> 
           <form onSubmit={this.handleSend}>  
                  <div className="form-group row">
                     <label htmlFor= "nombre" className= "slogan tituloAlineado col-sm-2">nombre</label>
                     <div className="col-sm-4">
                     <input value= {this.state.nombre}
                     onChange={this.handleChange('nombre')}
                     id = "nombre" name="nombre" className="form-control form-rounded" type="text" />
                 </div>
                </div>


                <div className="form-group row">
                     <label htmlFor= "correo" className= "slogan tituloAlineado col-sm-2">Correo</label>
                     <div className="col-sm-4">
                     <input value= {this.state.correo}
                     onChange={this.handleChange('correo')}
                     id = "correo" name="correo" className="form-control form-rounded" type="text" />
                 </div>
                </div>

                <div className="form-group row">
                     <label htmlFor= "telefono" className= "slogan tituloAlineado col-sm-2">Teléfono</label>
                     <div className="col-sm-4">
                     <input value= {this.state.telefono}
                     onChange={this.handleChange('telefono')}
                     id = "telefono" name="telefono" className="form-control form-rounded" type="text" />
                 </div>
                </div>

                
                <div className="form-group row">
                     <label htmlFor= "mensaje" className= "slogan tituloAlineado col-sm-2">Mensaje</label>
                     <div className="col-sm-4">
                     <input value= {this.state.mensaje}
                     onChange={this.handleChange('mensaje')}
                     id = "mensaje" name="mensaje" className="form-control form-rounded" type="text" />
                 </div>
                </div>
        
            <button className="col-sm-1 btn btn-success form-rounded">Enviar datos</button>
          
          {/*  <ReCAPTCHA
          sitekey="6LdQgqMUAAAAAJZHab-DxVGVdXarjvZphtUWf264"
          onChange={this.onChange}
            />  */}

        </form>
     </div>
   </div>


      )
      
    }

}
    export default Contacto;
















      //  onChange(event){
  //    this.setState({[event.target.name]:event.target.value})
  //    }