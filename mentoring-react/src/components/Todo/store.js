import { makeAutoObservable } from 'mobx';
// import { create, persist } from 'mobx-persist'
import nextId from "react-id-generator";

class TodoStore {
    todoItems = [];
    isEdit = false;
    filter = 'all';

    constructor(arg) {
        makeAutoObservable(this);
    }

    addTodoItem = (event) => {
        event.preventDefault();
        const newItem = ({
            itemValue: event.target.itemListValue.value,
            complete: false,
            id: nextId(),
        })
        if(newItem.itemValue === '') return;
        this.todoItems = [...this.todoItems, newItem];
        event.target.itemListValue.value = '';
    }

    deleteTodoItem = (item) => {
        this.todoItems = [...this.todoItems.slice(0, item), ...this.todoItems.slice(item + 1)]
    }

    completedTodo = (id) => {
        const todoIndex = this.todoItems.findIndex(item => item.id === id);
        this.todoItems[todoIndex].complete = !this.todoItems[todoIndex].complete;
        this.todoItems = [...this.todoItems]
    }

    completedAll = () => {
        const allComplete = this.todoItems.every(item => item.complete);
        const notComplete = this.todoItems.every(item => !item.complete);
        let completeTodos;

        const findAllItems = bool => (
            completeTodos = this.todoItems.map(item => {
                item.complete = bool ? !item.complete : true;
                return item;
            })
        )

        if (allComplete || notComplete) {
            findAllItems(true);
        } else {
            findAllItems(false);
        }

        this.todoItems = completeTodos;
    }

    editDoubleClick = (item, inputValue) => {
        this.isEdit = true;
        console.log('double click')
        if (inputValue === '') {
              this.deleteTodoItem(item)
        } else {
            this.findTodo(item).inputValue = inputValue;
            return this.isEdit = false;
        }
    }

    get unfinishedCount() {
        return this.todoItems.filter(item => !item.complete).length;
    }

    filterTodoList = (item) => {
        if (this.filter = 'completed') return item.complete;
        if (this.filter = 'active') return !item.complete;
        return true;
    }

    updateFilter = (filter) => {
        this.filter = filter;
    }

    showButtonClearAll = () => {
        return this.todoItems.filter(item => item.complete).length;
    }

    clearCompleted = () => {
        return this.todoItems = this.todoItems.filter(item => !item.complete);
    }
}

// const hydrate = create({
//     storage: TodoStore,
//     jsonify: true
// })

const store = new TodoStore();

export default store;
