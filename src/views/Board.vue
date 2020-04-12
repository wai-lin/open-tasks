<template>
  <div class="board">
    <div v-for="(col, colIndex) in columns" :key="col.id" class="column">
      <h1 class="flex items-center justify-between">
        {{ col.name }}
        <span @click="removeColumnByIndex(colIndex)" class="cursor-pointer">
          &times;
        </span>
      </h1>
      <router-link
        v-for="task in col.tasks"
        :key="task.id"
        class="task"
        :to="{ name: 'Task', params: { task_id: task.id } }"
      >
        {{ task.name }}
      </router-link>
      <BaseInput
        type="text"
        class="w-full block"
        @keypress.enter="addNewTaskInColumnInputHandler($event, colIndex)"
      />
    </div>
    <div class="column">
      <BaseInput
        type="text"
        class="w-full"
        @keypress.enter="addNewColumnInputHandler($event)"
      />
    </div>

    <router-view />
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'BoardView',
    computed: {
      ...mapState({
        board: (state) => ({ id: state.board.id, name: state.board.name }),
        columns: (state) => state.board.columns,
      }),
    },
    methods: {
      ...mapMutations({
        addNewColumn: 'board/ADD_NEW_COLUMN',
        addNewTaskInColumn: 'board/ADD_NEW_TASK_IN_COLUMN',
        removeColumnByIndex: 'board/REMOVE_COLUMN_BY_INDEX',
      }),
      addNewColumnInputHandler(event) {
        this.addNewColumn(event.target.value)
      },
      addNewTaskInColumnInputHandler(event, colIndex) {
        this.addNewTaskInColumn({ colIndex, newTaskName: event.target.value })
      },
    },
  }
</script>

<style scoped>
  .board {
    @apply p-5 w-screen h-screen overflow-auto flex flex-no-wrap items-start;
  }

  .column {
    min-width: 250px;
    max-width: 250px;
    @apply inline-block mr-5 p-4 rounded shadow;
  }

  .task {
    @apply block my-3 py-4 px-2 bg-gray-300 rounded shadow;
  }
</style>
