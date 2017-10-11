import { observable } from "mobx";

class TodoStore {
    @observable todoList = ['sdfsfsd'];
    @observable filter = "";
}

let store = new TodoStore;

export default store;