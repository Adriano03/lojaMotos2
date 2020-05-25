import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { MarcaService } from '../services/marca.service';
import { Marca } from '../models/marca.model';

@Component({
  selector: 'app-cadastro-marca',
  templateUrl: './cadastro-marca.component.html',
  styleUrls: ['./cadastro-marca.component.scss']
})
export class CadastroMarcaComponent implements OnInit {

  formulario = this.formBuilder.group({
    nome  : ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private marcaService: MarcaService
    ) {

   }
  

  ngOnInit(): void {
  }

  async submit() {

    if (!this.formulario.valid) {
      return;
    }

    const marca = this.formulario.value as Marca;
    const marcaRetorno = await this.marcaService.add(marca);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

  }

}
