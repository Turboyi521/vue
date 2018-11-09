<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todos-header :addTodo="addTodo"></todos-header>
      <List :todos="todos" :deleteTodo="deleteTodo"></List>
      <todos-footer :todos="todos" :selectAll="selectAll" :clearAllCompleted="clearAllCompleted"></todos-footer>
    </div>
  </div>
</template>

<script>
  import Header from './Header.vue'
  import List from './List.vue'
  import Footer from './Footer.vue'

  import storageUtil from '../util/storageUtil'

  export default {
    data () {
      return {
        todos: []
      }
    },

    mounted () {
      // 从local存储中读取保存的todos
      /*const todosJson = localStorage.getItem('todos_key')
      if(!todoJson) {
        return []
      } else {
        return JSON.parse(todosJson)
      }*/
      this.todos = storageUtil.readTodos()
    },

    methods: {
      addTodo (todo) {
        this.todos.unshift(todo)
      },

      deleteTodo (index) {
        this.todos.splice(index, 1)
      },

      // 全选/全不选
      selectAll (isCheck) {
        this.todos.forEach(todo => {
          todo.complete = isCheck
        })
      },

      // 清除所有已完成的
      clearAllCompleted () {
        this.todos = this.todos.filter(todo => !todo.complete)
      }
    },

    watch: {
      todos: {
        deep: true, //深度监视
        /*handler: function (value) { // value是最新的todos
          // 保存todos到local
          storageUtil.saveTodos(value)
        }*/
        handler: storageUtil.saveTodos
      }
    },

    components: {
      'todos-header': Header,
      List,
      'todos-footer': Footer
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>