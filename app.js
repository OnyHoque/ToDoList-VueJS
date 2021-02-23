const app = {
    data() {
      return {
        id : 2,
        newTodo : "",
        todos: [{'id' : 1, 'title': 'Task 1', 'completed': false}],
      }
    },
    methods: {
        addTask(){
            this.newTodo = this.newTodo.trim();

            this.todos.push({
              id: this.id,
              title: this.newTodo,
              completed: false,
            });
            
            this.newTodo = '';
            this.id++;
        },
        removeTask(index){
          this.todos.splice(index, 1);
        }
    }
  }
  
  Vue.createApp(app).mount('#app')