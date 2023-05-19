export interface ITaskUseCaseDelete {
  delete(params: ITaskUseCaseDelete.Params): Promise<void | Error>
}
export namespace ITaskUseCaseDelete {
  export type Params = {
    id: string
  }
}