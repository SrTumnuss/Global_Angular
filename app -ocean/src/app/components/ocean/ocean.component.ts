import { Component } from '@angular/core';
import { OceanService } from '../../services/ocean.service';
import { Ocean } from '../../interfaces/ocean';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ocean',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ocean.component.html',
  styleUrl: './ocean.component.css'
})
export class OceanComponent {
  ocean:Ocean[] = [];
 
  
  constructor(private oceanService: OceanService){

  }
//    constructor(private oceanService:OceanService, private formBuilder: FormBuilder) {
//     this.oceanForm = this.formBuilder.group({

//     regiao:["",Validators.required],
//     especie:["",Validators.required],
//     statusConservacao:["",Validators.required],
//     temperaturaMin:["",Validators.required],
//     temperaturaMax:["",Validators.required],
//     phMin:["",Validators.required],
//     phMax:["",Validators.required],
//     nivelPoluicao:["",Validators.required],
//     pagina:["",Validators.required],
//     qtde:["",Validators.required]

//   })
  
//   }
//   filtrar(){
//     if(this.oceanForm.valid){
//       const oceanFiltro: InfoTabela ={

//         regiao: this.oceanForm.value.regiao,
       
       
//       }
//       this.oceanForm.reset()
//       this.oceanService.listar().subscribe((listaOcean) => (this.ocean = listaOcean));
//     }


// }


  


  listar():void{
      this.oceanService.listar().subscribe((listaOcean) => (this.ocean = listaOcean));
      
     
  }

  ngOnInit():void{
    this.listar();
  }

}
