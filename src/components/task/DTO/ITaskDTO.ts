export enum IPriority {
   baixa = 'baixa',
  media = 'média',
  alta = 'alta'
}
export interface ITaskDTO {
  readonly id: string ;
  task: string;
  priority: IPriority;
  creationDate: string;
  idUser: string
}


