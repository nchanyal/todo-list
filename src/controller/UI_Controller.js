import { DOM_Manipulator } from "../components/DOM_Manipulator";
import { ProjectsManager} from "../components/ProjectsManager";
import { Project } from "../components/Project";
import { Todo } from "../components/Todo";
import { ProjectAdder } from "../components/ProjectAdder";
import { format } from "../../node_modules/date-fns";

export class UI_Controller {
    #projectsManager;
    #currentDisplayedProjectIndex;

    constructor(){
        this.#projectsManager = new ProjectsManager();
        this.#currentDisplayedProjectIndex = 0;
    }

    initalizeApp(){
        ProjectAdder.addDummyContent(this.#projectsManager);
        DOM_Manipulator.generateInitialWebpage(this.#projectsManager.listOfProjects, this.#projectsManager.getProject(0).nameOfProject, this.#projectsManager.getProject(0).listOfTodos);
        this.#addEventListeners();
    }

    #addEventListeners(){
        this.#addEventListenersToElementsOfAddProjectDialog();
        this.#addEventListenersToElementsOfAddTodoDialog();
        this.#addEventListenersToElementsOfProjectNavigation();
        this.#addEventListenersToElementsOfTodoList();
    }

    #addEventListenersToElementsOfProjectNavigation(){
        const addProjectButton = document.querySelector("#new-project-button");
        const addProjectDialog = document.querySelector("#add-project-dialog");
        addProjectButton.addEventListener("click", () => addProjectDialog.showModal());
    }

    #addEventListenersToElementsOfAddProjectDialog(){
        const addProjectDialog = document.querySelector("#add-project-dialog");
        const addProjectForm = document.querySelector("#add-project-dialog > form");
        const closeButton = document.querySelector("#close-button");
        const submitButton = document.querySelector("#submit-button");
        const projectNameInput = document.querySelector("#project_name");

        closeButton.addEventListener("click", () => addProjectDialog.close());
        submitButton.addEventListener("click", (event) => {
            if(!projectNameInput.validity.valueMissing){
                event.preventDefault();
                addProjectDialog.close();
                this.#projectsManager.addProject(new Project(projectNameInput.value));
                DOM_Manipulator.generateProjectNavigation(this.#projectsManager.listOfProjects);
                this.#addEventListenersToElementsOfProjectNavigation();
                addProjectForm.reset();
            }
        });
    }

    #addEventListenersToElementsOfTodoList(){
        const addTodoButton = document.querySelector("#todo-list-header > button");
        const addTodoDialog = document.querySelector("#add-todo-dialog");

        addTodoButton.addEventListener("click", () => addTodoDialog.showModal());
    }

    #addEventListenersToElementsOfAddTodoDialog(){
        const addTodoDialog = document.querySelector("#add-todo-dialog");
        const addTodoForm = document.querySelector("#add-todo-dialog > form");
        const todoNameInput = document.querySelector("#todo_name");
        const dueDateInput = document.querySelector("#due_date");
        const todoDetailsInput = document.querySelector("#todo_details");
        const highPriorityRadioButton = document.querySelector("#high");
        const mediumPriorityRadioButton = document.querySelector("#medium");
        const lowPriorityRadioButton = document.querySelector("#low");
        const closeButton = document.querySelector("#todo-close-button");
        const submitButton = document.querySelector("#todo-submit-button");
        let currentProject;
        let priorityValue;
        let arrayOfDates;

        closeButton.addEventListener("click", () => addTodoDialog.close());
        submitButton.addEventListener("click", (event) => {
            if(!todoNameInput.validity.valueMissing &&
                !dueDateInput.validity.valueMissing &&
                !todoDetailsInput.validity.valueMissing &&
                (highPriorityRadioButton.checked ||
                 mediumPriorityRadioButton.checked || 
                 lowPriorityRadioButton.checked)){
                    if(highPriorityRadioButton.checked){
                        priorityValue = highPriorityRadioButton.value;
                    }else if(mediumPriorityRadioButton.checked){
                        priorityValue = mediumPriorityRadioButton.value
                    }else {
                        priorityValue = lowPriorityRadioButton.value
                    }

                    arrayOfDates = dueDateInput.value.split("-");

                    event.preventDefault();
                    addTodoDialog.close();

                    currentProject = this.#projectsManager.getProject(this.#currentDisplayedProjectIndex);
                    currentProject.addTodo(new Todo(todoNameInput.value, todoDetailsInput.value, 
                        format(new Date(arrayOfDates[0], +arrayOfDates[1]-1, arrayOfDates[2]), 
                        "LLL do"), priorityValue));

                    DOM_Manipulator.generateDirectoryOfTodos(currentProject.nameOfProject, 
                        currentProject.listOfTodos);

                    this.#addEventListenersToElementsOfTodoList();
                    addTodoForm.reset();
            }
        });

    }
}