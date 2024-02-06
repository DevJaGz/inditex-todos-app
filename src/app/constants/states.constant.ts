import { TodosState } from '../interfaces';

export const INITIAL_TODOS_STATE: TodosState = {
  list: [
    {
      id: '1',
      name: 'todo1',
      description: 'todo1 description',
    },
    {
      id: '2',
      name: 'todo2',
      description: 'todo2 description',
    },
  ],
};
