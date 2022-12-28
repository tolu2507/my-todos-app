export interface TASKS{
    _id:string,
    task: string,
    time_stated: string,
    time_finished: string,
    isDone:boolean
}

export interface UPDATETASKS {
  task: string;
  time_stated: string;
  time_finished: string;
    isDone: boolean;
    comment: string;
}
export{}