function todoController() {
  this.list = [{
        title: 'First todo item',
        completed: false,
      },{
        title: 'Second todo item',
        completed: false,
      },{
        title: 'Third todo item',
        completed: true,
      }];

    }

angular
  .module('app')
  .controller('todoController', todoController);
