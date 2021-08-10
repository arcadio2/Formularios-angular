import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!:NgForm;
  initForm = {
    producto: 'RTX-4080ti',
    precio:10,
    existencias:10
  }

  constructor() { }

  ngOnInit(): void {
  }
  nombreValido(): boolean{
    const valido = this.miFormulario?.controls.producto?.invalid 
                    && this.miFormulario?.controls.producto?.touched;
    return valido; 
  }
  precioValido():boolean{
    const valido = this.miFormulario?.controls.precio?.invalid 
                    && this.miFormulario?.controls.precio?.touched;
    ///.value<0
    return valido; 
  }

  guardar(){
    
    this.miFormulario.resetForm({
      precio:0,
      existencias:0
    }); 
  }

}
