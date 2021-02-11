// "<div class='col "+importance+"'><div class='row'><h5>"+task_name+"</h5></div><div class='row'><p>"+task_info+"</p></div>"

const app = {
  data() {
    return {
      counter: 0,
      taskName: "",
      taskDeadline: "",
      option1: false,
      option2: false,
      option3: false,
      tasks: [
        { name: "Task 1", note: "No Note", classType: "green", id: 0},
        { name: "Task 2", note: "No Note", classType: "orange", id: 1},
        { name: "Task 3", note: "No Note", classType: "red", id: 2},
      ],
      tasks_complete: [

      ],
    };
  },
  methods: {
    addTask() {
      var classValue = "";
      if (this.option1) {
        classValue = "red";
      } else if (this.option2) {
        classValue = "orange";
      } else {
        classValue = "green";
      }
      this.tasks.push({
        name: this.taskName,
        note: this.taskDeadline,
        classType: classValue,
        id: this.tasks.length,
      });

      // this.taskName = "";
      // this.taskDeadline = "";
      // this.option1 = false;
      // this.option2 = false;
      // this.option3 = false;
      this.addClass();
    },
    addClass() {
      var list = document.getElementsByClassName("incomplete_li");
      for (var i = 0; i < list.length; i++) {
        var task = this.tasks[i];
        console.log("id: "+task.id+"  color: "+task.classType);
        list[i].classList.add( task.classType );
      }
    },
    addCompleteClass(){
      var list = document.getElementsByClassName("complete_li");
      for (var i = 0; i < list.length; i++) {
        var task = this.tasks_complete[i];
        console.log("id: "+task.id+"  color: "+task.classType);
        list[i].classList.add( task.classType );
      }
    },
    check1(e) {
      this.option2 = false;
      this.option3 = false;
    },
    check2(e) {
      this.option1 = false;
      this.option3 = false;
    },
    check3(e) {
      this.option1 = false;
      this.option2 = false;
    },
    deleteTask(j){
      this.tasks.splice(j,1);
      for(var i = 0; i < this.tasks.length; ++i){
        this.tasks[i].id = i;
      }
    },
    deleteCompleteTask(j){
      this.tasks_complete.splice(j,1);
      for(var i = 0; i < this.tasks_complete.length; ++i){
        this.tasks_complete[i].id = i;
      }
    },
    completeTask(j){
      var task = this.tasks[j];
      this.tasks.splice(j,1);
      this.tasks_complete.push(task);
      for(var i = 0; i < this.tasks.length; ++i){
        this.tasks[i].id = i;
      }
      this.addCompleteClass();
    },
  },
};

Vue.createApp(app).mount("#vue-app");
