import { PRIORITYS } from "./Priority.Enum";

export class Task {
  id = -1;
  description = "";
  priority = PRIORITYS.Normal;
  isCompleted = false;
  dateToFinish = null;

  constructor(id, description, dateToFinish, priority, isCompleted) {
    this.id = id;
    this.description = description;
    this.dateToFinish = dateToFinish;
    this.priority = priority;
    this.isCompleted = isCompleted;
  }
}
