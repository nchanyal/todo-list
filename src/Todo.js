export class Todo {
    #title;
    #description;
    #dueDate;
    #priority;
    #completeStatus = false;


    constructor(title, description, dueDate, priority, completeStatus){
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
    }

    get title(){
        return this.#title;
    }

    get description(){
        return this.#description;
    }

    get dueDate(){
        return this.#dueDate;
    }

    get priority(){
        return this.#priority;
    }

    isComplete() {
        return this.#completeStatus;
    }

    set title(nameOfTask){
        this.#title = nameOfTask;
    }

    set description(descriptionOfTask){
        this.#description = descriptionOfTask;
    }

    set dueDate(deadlineForTask){
        this.#dueDate = deadlineForTask;
    }

    set priority(levelOfUrgency){
        this.#priority = levelOfUrgency;
    }

    set completeStatus(boolean){
        this.#completeStatus = boolean;
    }
}