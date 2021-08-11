import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  implements OnInit{

  /* miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('RTX 4080ti'),
    precio: new FormControl(1500),
    existencias: new FormControl(5)

  }); */
  miFormulario: FormGroup = this.fb.group({
    nombre: [, /*Sincronos */ 
            [,Validators.required, Validators.minLength(3)] ,/*Asicnrono */ ],
    precio: [ ,[Validators.min(0), Validators.required]],
    existencias: [, [Validators.min(0), Validators.required]],
  });
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.miFormulario.reset({
      nombre:'RTX 4080ti',
      precio:1600,
      existencias:10
    })
  }
  campoEsValido(campo:string){
    const val = this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched; 
    return val; 
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return; 
    }
    this.miFormulario.reset(); 
  }


}
