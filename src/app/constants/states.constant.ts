import { Todo, TodosState } from '../interfaces';
import { generateId } from '../utils/generators.util';

export const INITIAL_TODO_STATE: Todo = {
  name: '',
  description: '',
};

export const INITIAL_TODOS_STATE: TodosState = {
  list: [
    // {
    //   id: generateId(),
    //   name: 'Add One',
    //   description: 'Click on the Add button that is on top and fill the form',
    // },
    // {
    //   id: generateId(),
    //   name: 'See Details',
    //   description: 'Click on the eye icon and see the details',
    // },
    // {
    //   id: generateId(),
    //   name: 'Remove One',
    //   description: 'Click on the trash icon and remove the TODO',
    // },
  ],
  selected: null,
};
