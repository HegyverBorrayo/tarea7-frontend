import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IngresoService } from 'src/app/services/ingreso.service';

@Component({
  selector: 'app-ingreso-nota',
  templateUrl: './ingreso-nota.component.html',
  styleUrls: ['./ingreso-nota.component.scss']
})
export class IngresoNotaComponent implements OnInit {
  formulario: FormGroup;
  constructor(private fb: FormBuilder, private formularioService: IngresoService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: [''],
      notaprimerparcial:[''],
      notasegundoparcial:[''],
      notafinal: [''],
    });
  }

  onSubmit() {
    this.formularioService.saveNota(this.formulario.value).subscribe((x)=>{
      console.log(x)
    })
    console.log(this.formulario.value);
    this.formulario.reset();
  }
}
