import shortid from 'shortid'

const initialState = {
  id: shortid.generate(),
  name: 'workshop',
  columns: [
    {
      id: shortid.generate(),
      name: 'todo',
      tasks: [
        {
          id: shortid.generate(),
          name: 'first task',
          description: '',
          userAssigned: null,
        },
        {
          id: shortid.generate(),
          name: 'second task',
          description: '',
          userAssigned: null,
        },
        {
          id: shortid.generate(),
          name: 'third task',
          description: '',
          userAssigned: null,
        },
      ],
    },
    {
      id: shortid.generate(),
      name: 'in-progress',
      tasks: [
        {
          id: shortid.generate(),
          name: 'in-progress first task',
          description: '',
          userAssigned: null,
        },
      ],
    },
  ],
}

export default {
  namespaced: true,
  state: { ...initialState },
  mutations: {
    ADD_NEW_COLUMN(state, newColunmName) {
      state.columns.push({
        id: shortid.generate(),
        name: newColunmName,
        tasks: [],
      })
    },
    ADD_NEW_TASK_IN_COLUMN(state, { colIndex, newTaskName }) {
      state.columns[colIndex].tasks.push({
        id: shortid.generate(),
        name: newTaskName,
        description: '',
        userAssigned: null,
      })
    },
    REMOVE_COLUMN_BY_INDEX(state, colIndex) {
      state.columns = state.columns.filter((col, index) => index !== colIndex)
    },
  },
  actions: {},
}
