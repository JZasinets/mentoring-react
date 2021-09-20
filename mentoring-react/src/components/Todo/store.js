import { makeObservable, observable, action, computed } from 'mobx';
import { create, persist } from 'mobx-persist'

class TodoStore {
    todoItems = [];
    count = 0;
    isEdit = false;

    constructor() {
        makeObservable(this, {
            todoItems: observable,
            addTodoItem: action,
            deleteTodoItem: action,
            editDoubleClick: action,
            unfinishedCount: computed,
            isEdit: observable,
            complete: computed,
        });
    }

    get unfinishedCount() {
        return this.todoItems.filter(todoItem => todoItem.complete === true).length;
    }

    addTodoItem = (event) => {
        event.preventDefault();
        const itemValue = event.target.itemListValue.value;
        this.todoItems = [...this.todoItems, itemValue];
        event.target.itemListValue.value = '';
    }

    deleteTodoItem = (item) => {
        this.todoItems = [...this.todoItems.slice(0, item), ...this.todoItems.slice(item + 1)]
    }

     findTodo(item) {
        return this.todoItems.find(todoItem => todoItem.item === item)
     }

    editDoubleClick = (item, inputValue) => {
        this.isEdit = true;
        console.log('double click')
        if (inputValue.length) {
              this.deleteTodoItem(item)
        } else {
            this.findTodo(item).inputValue = inputValue;
            return this.isEdit = false;
        }
    }
}

const hydrate = create({
    storage: TodoStore,
    jsonify: true
})

export default TodoStore;
