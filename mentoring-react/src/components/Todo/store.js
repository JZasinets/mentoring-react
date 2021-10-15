import { makeAutoObservable } from 'mobx';
import nextId from "react-id-generator";
import { makePersistable } from 'mobx-persist-store';

class TodoStore {
    todoItems = [];
    filter = 'all';
    loading = true;

    constructor(arg) {
        makeAutoObservable(this);
        makePersistable(this, { name: 'TodoStore', properties: ['todoItems'], storage: window.localStorage });
    }

    clearStore = () => {
        localStorage.clear();
    }

    filterTodoList = (filter) => {
        this.filter = filter;
    }

    get getFilter() {
        switch(this.filter) {
            case 'all':
                return this.todoItems;
            case 'active':
                return this.todoItems.filter(todo => !todo.complete);
            case 'completed':
                return this.todoItems.filter(todo => todo.complete);
            default:
                return this.todoItems;
        }
    }

    addTodoItem = (event) => {
        event.preventDefault();
        const newItem = {
            itemValue: event.target.itemListValue.value,
            complete: false,
            id: nextId(),
            isEdit: false,
            visibleRectangle: false,
        }
        if(newItem.itemValue === '') return;
        this.todoItems = [...this.todoItems, newItem];
        event.target.itemListValue.value = '';
    }

    deleteTodoItem = (item) => {
        this.todoItems = [...this.todoItems.slice(0, item), ...this.todoItems.slice(item + 1)]
    }

    completedTodo = (id) => {
        this.todoItems = this.todoItems.map((item) => item.id === id ? { ...item, complete: !item.complete } : item)
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

    editDoubleClick = (id) => {
        this.todoItems = this.todoItems.map((item) => item.id === id ? { ...item, isEdit: !item.isEdit } : item)
    }

    getNewTodoValue = (value, id) => {
        if(value === '') return;
        return this.todoItems = this.todoItems.map((item) => item.id === id ? { ...item, itemValue: value } : item)
    }

    addChangeItemValue = (event, id) => {
        if (event.key === 'Enter') this.editDoubleClick(id);
    }

    get unfinishedCount() {
        return this.todoItems.filter(item => !item.complete).length;
    }

    showButtonClearAll = () => {
        return this.todoItems.filter(item => item.complete).length;
    }

    clearCompleted = () => {
        return this.todoItems = this.todoItems.filter(item => !item.complete);
    }

    showRectangle = (id) => {
        this.todoItems = this.todoItems.map((item) => item.id === id ? { ...item, visibleRectangle: !item.visibleRectangle } : item)
    }

    getLoadingDelay = () => {
        setTimeout(() => {
            this.loading = false;
        }, 3000);
    }
}

const store = new TodoStore();

export default store;
