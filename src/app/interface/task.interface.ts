interface ITask {
  id: number;
  title: string;
  dueDate: Date;
  description: string;
  type: string;
}

interface ITaskType {
  type: string;
}

interface ITaskCount {
  type: string;
  count: number;
}

export { ITask, ITaskType, ITaskCount };
