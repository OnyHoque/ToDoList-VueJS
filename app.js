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
      tasks: [],
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
        importance: this.taskDeadline,
        classtype: classValue,
      });

      this.taskName = "";
      this.taskDeadline = "";
      this.option1 = false;
      this.option2 = false;
      this.option3 = false;
      this.addClass();
    },
    addClass() {
      var list = document.getElementsByTagName("li");
      for (var i = 0; i < list.length; i++) {
        var task = this.tasks[i];
        list[i].classList.add(task.classtype);
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
  },
};

Vue.createApp(app).mount("#vue-app");
