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

export interface CREATEUSER{
  name: string;
  email: string;
  password: string;
  re_password: string;
  isAdmin: boolean;
  gender:string
}

export interface SIGNUSER {
  email: string;
  password: string;
}

export{}