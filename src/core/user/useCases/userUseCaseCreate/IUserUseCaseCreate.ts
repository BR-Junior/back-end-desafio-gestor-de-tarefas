export interface IUserUseCaseCreate {
  create(params: IUserUseCaseCreate.Params): Promise<IUserUseCaseCreate.Result | Error>
}
export namespace IUserUseCaseCreate {
  export type Params = {
    name: string;
    email: string;
    password: string;
  }
  export type Result = {
    id: string
    name: string;
    email: string;
  }
}