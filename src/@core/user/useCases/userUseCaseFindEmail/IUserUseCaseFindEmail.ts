export interface IUserUseCaseFindEmail {
  findEmail(params: IUserUseCaseFindEmail.Params): Promise<IUserUseCaseFindEmail.Result | Error>
}
export namespace IUserUseCaseFindEmail {
  export type Params = {
    email: string
    password: string
  }
  export type Result = {
    id: string
    token?: string
    email?: string
    password?: string
  }
}