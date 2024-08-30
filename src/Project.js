export class Project {
    #listOfTodos;
    #nameOfProject;

    constructor(nameOfProject){
        this.#listOfTodos = [];
        this.#nameOfProject = nameOfProject;
    }

    addTodo(todoObject){
        this.#listOfTodos.push(todoObject);
    }

    removeTodo(indexOfTodoObject){
        this.#listOfTodos.splice(indexOfTodoObject, 1);
    }

    get listOfTodos(){
        return this.#listOfTodos;
    }

    get nameOfProject(){
        return this.#nameOfProject;
    }
}