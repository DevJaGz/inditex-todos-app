import { Todo, TodosState } from '../interfaces';

export const INITIAL_TODO_STATE: Todo = {
  name: '',
  description: '',
};

export const INITIAL_TODOS_STATE: TodosState = {
  list: [
    {
      id: '1-demo',
      name: 'Add One',
      description: 'Click on the Add button that is on top and fill the form',
    },
    {
      id: '2-demo',
      name: 'See Details',
      description: 'Click on the eye icon and see the details',
    },
    {
      id: '3-demo',
      name: 'Remove One',
      description: 'Click on the trash icon and remove the TODO',
    },
  ],
  selected: null,
};
