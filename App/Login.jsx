import ReCAPTCHA from "react-google-recaptcha";
import React, {Component} from 'react';
import  './Login.css';
const recaptchaRef = React.createRef();

class Login extends Component
{

  constructor(args){
    super(args)
    
    this.state = { //propiedades de la vista.
      username: '',
      password: '',
      doIacceptTerms: false,
      message: 'Debe aceptar términos y condiciones'
    }
  }

  
   
 onChangeCaptcha(value) {
   console.log("captcha value:", value);
 }
 
onChange(event){
       if(event.target.name === "doiacceptterms"){ 
         if(event.target.unchecked){
           this.setState({doiacceptterms:false, message: 'debe aceptar los términos y condiciones'})
         }
         else{
           this.setState({[event.target.name]:event.target.value})
           this.setState({doiacceptterms:true, message:''})
         }
       }
       else{
        this.setState({[event.target.name]:event.target.value})
      }
   }

  submitData(event){
    const data = new FormData(event.target);
    console.log(data);
    
  }

  onSubmit(){
    this.submitData();
    const recaptchaValue = recaptchaRef.current.getValue();
    this.props.onSubmit(recaptchaValue);
  }

render(){
return (
  <div>
    <div className= "container"> 
    <form onSubmit = {this.onSubmit}>
          <div className="form-group row">
              <label htmlFor= "username" className= "col-sm-2">Correo electrónico</label>
            <div className="col-sm-4">
              <input value= {this.state.username}
              onChange={this.onChange.bind(this)}
              id = "username" name="username" className="form-control form-rounded" type="text" />
            </div>
          </div>

          <div className="form-group row">
              <label htmlFor= "password" className ="col-sm-2">Contraseña</label>
            <div className="col-sm-4">
              <input value = {this.state.password}
               onChange={this.onChange.bind(this)}
               id="password" name="password" className="form-control form-rounded" type="password" />
            </div>
          </div>
          
          <div className="form-check">
            <input  onChange={this.onChange.bind(this)} 
            checked = {this.state.doIacceptTerms}
            htmlFor = "doIacceptTerms" type="checkbox" 
            className="form-check-input" id="doIacceptTerms"
            name = "doIacceptTerms"
            />
            <label htmlFor="doIacceptTerms">He leído y acepto los términos y condiciones</label>
            <small htmlFor= "doIacceptTerms" id="doIacceptTerms" className="form-text text-muted">{this.props.message}</small>
         </div> 
         <ReCAPTCHA
          ref={recaptchaRef}
          sitekey="6LdQgqMUAAAAAJZHab-DxVGVdXarjvZphtUWf264"
          onChange={this.onChangeCaptcha}
         /> 
          <button className="col-sm-1 btn btn-success form-rounded">Login</button>
          <span>{JSON.stringify(this.state)}</span>

          </form> 
   

   </div>
   </div>)
  }
} 

export default Login;

