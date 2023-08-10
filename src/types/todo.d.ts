interface ITodoItemContent {
  content: string;
}

interface ITodoItem extends ITodoItemContent {
  id: string;
  completed: boolean;
  edting: boolean;
}
