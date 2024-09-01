export class DOM_Manipulator {
    static generateHeader(){
        const contentDiv = document.querySelector("#content");
        const headerDiv = document.createElement("div");
        const headerParagraph = document.createElement("p");

        headerDiv.setAttribute("id", "header");
        headerParagraph.textContent = "Todo List";

        headerDiv.appendChild(headerParagraph);
        contentDiv.appendChild(headerDiv);
    }

    static generateDirectoryOfProjects(arrayOfProjects){
        const contentDiv = document.querySelector("#content");
        const projectsDiv = document.createElement("div");
        projectsDiv.setAttribute("id", "project-list");

        for(const project of arrayOfProjects){
            const projectDiv = document.createElement("div");
            const projectNameButton = document.createElement("button");
            const deleteButton = document.createElement("button");

            projectNameButton.textContent = project.nameOfProject;
            deleteButton.textContent = "X";

            projectDiv.appendChild(projectNameButton);
            projectDiv.appendChild(deleteButton);
            projectsDiv.appendChild(projectDiv);
        }

        contentDiv.appendChild(projectsDiv);
    }

    static generateDirectoryOfTodos(arrayOfTodos){
        const contentDiv = document.querySelector("#content");
        const todosDiv = document.createElement("div");
        todosDiv.setAttribute("id", "todo-list");

        for(let i = 0; i < arrayOfTodos.length; i++){
            const todo = arrayOfTodos[i];
            const todoDiv = document.createElement("div");
            const leftContainer = document.createElement("div");
            const rightContainer = document.createElement("div");
            const checkbox = document.createElement("input");
            const todoTitleParagraph = document.createElement("p");
            const todoDueDateParagraph =  document.createElement("p");
            const detailsButton = document.createElement("button");
            const editButton = document.createElement("button");
            const deleteButton = document.createElement("button");
        
            todoDiv.dataset.row = i;
            leftContainer.setAttribute("id", "left-container");
            rightContainer.setAttribute("id", "right-container");
            checkbox.setAttribute("type", "checkbox");
            detailsButton.setAttribute("id", "details");
            editButton.setAttribute("id", "edit");
            deleteButton.setAttribute("id", "delete");

            todoTitleParagraph.textContent = todo.title;
            todoDueDateParagraph.textContent = todo.dueDate;
            detailsButton.textContent = "DETAILS";
            editButton.textContent = "EDIT";
            deleteButton.textContent = "DELETE";

            leftContainer.appendChild(checkbox);
            leftContainer.appendChild(todoTitleParagraph);
            rightContainer.appendChild(todoDueDateParagraph);
            rightContainer.appendChild(todoDueDateParagraph);
            rightContainer.appendChild(detailsButton);
            rightContainer.appendChild(editButton);
            rightContainer.appendChild(deleteButton);
            todoDiv.appendChild(leftContainer);
            todoDiv.appendChild(rightContainer);
            todosDiv.appendChild(todoDiv);
        }

        contentDiv.appendChild(todosDiv);
    }

    static generateInitialWebpage(arrayOfProjects, arrayOfTodos){
        DOM_Manipulator.generateHeader();
        DOM_Manipulator.generateDirectoryOfProjects(arrayOfProjects);
        DOM_Manipulator.generateDirectoryOfTodos(arrayOfTodos);        
    }
}