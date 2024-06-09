export interface  Ocean{
  regiao?:string;
  nivelPoluicao?:string;
  pH?:string;
  temperaturaAgua?:string;
  
  especies:[
    {
      nome:string;
      status:string;

}
]

projetosConservacao: [
    {
      nomeProjeto: string;
      tipoProjeto: string;
      tipoParticipacao: string;
    }
  ]
  
}
