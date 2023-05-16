import {TaskUseCaseSearch} from './TaskUseCaseSearch';
import {Request, Response} from 'express';
import {ITaskBucaDTO} from '../../DTO/ITaskDTO';



export class ITaskControllerSearch {
  constructor(private repo: TaskUseCaseSearch) {}

  async excute(task:string, res:Response) {
    const result = await this.repo.search(task);
    return res.status(200).json(result);
  }
}