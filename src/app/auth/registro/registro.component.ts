import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  get errorEmail():string{
    const errors =  this.miFormulario.get('email')?.errors; 
    if(errors?.required && this.miFormulario.get('email')?.touched){
      return "Es necesario un correo"; ; 
    }else if(errors?.pattern){
      return "El correo electrónico no es válido"; ;
    }else if(errors?.emailTomado){
      return "El correo electrónico está repetido";; 
    }else{
      return 'ha ocurrido un errror'; 
    }
    
  } 
  
  

  miFormulario:FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)] ],
    email:['',[Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailVal] ],
    username:['',[Validators.required, this.validatorService.xd] ],
    password:['',[Validators.required, Validators.minLength(6)] ],
    password2:['',[Validators.required ] ] 
    
  },{
    validators: [ this.validatorService.camposIguales('password','password2')] 
  });
  constructor(private fb: FormBuilder,
                private validatorService:ValidatorService, private emailVal: EmailValidatorService ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre:'Arcadio Lopez',
      email:'test@test.com',
      username:'sadsdasd',
      password:'123456',
      password2:'123456'
    });
  }

  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched; 
    
  }


  submitForm(){
    this.miFormulario.markAllAsTouched(); 
  }

}
