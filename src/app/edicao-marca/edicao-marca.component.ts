import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { MarcaService } from '../services/marca.service';
import { Marca } from '../models/marca.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicao-marca',
  templateUrl: './edicao-marca.component.html',
  styleUrls: ['./edicao-marca.component.scss']
})
export class EdicaoMarcaComponent implements OnInit {

  marca: Marca;

  formulario = this.formBuilder.group({
    nome  : ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private marcaService: MarcaService,
    private activedRoute: ActivatedRoute
    ) { }
  

  async ngOnInit(){
    const id = this.activedRoute.snapshot.paramMap.get('id');
    this.marca = await this.marcaService.get(id);
  }

  async submit() {

    if (!this.formulario.valid) {
      return;
    }

    this.formulario.disable();

    // const marca = this.formulario.value as Marca;
    // const marcaRetorno = await this.marcaService.add(marca);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

  }

}
