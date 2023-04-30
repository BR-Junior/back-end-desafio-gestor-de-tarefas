export enum IPriority {
  low = 'baixa',
  normal = 'média',
  high = 'alta'
}
export enum IStatus {
  open = 'aberto',
  doing = 'fazendo',
  finished = 'terminado'
}
export interface ITaskDTO {
  readonly id: string ;
  task: string;
  priority: IPriority;
  status: IStatus,
  creationDate: string;
  idUser: string
}


