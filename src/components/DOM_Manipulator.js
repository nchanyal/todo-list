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

    static generateProjectNavigation(arrayOfProjects){
        const contentDiv = document.querySelector("#content");
        const addProjectButton = document.createElement("button");
        const projectNavTitle = document.createElement("p");
        const topContainer = document.createElement("div");
        let projectNavigationDiv = document.querySelector("#project-nav");

        if(projectNavigationDiv === null){
            projectNavigationDiv = document.createElement("div");
            projectNavigationDiv.setAttribute("id", "project-nav");
        }else{
            projectNavigationDiv.textContent = "";
        }
        
        addProjectButton.textContent = "Add Project";
        projectNavTitle.textContent = "Projects:";

        topContainer.setAttribute("id", "top-container");
        addProjectButton.setAttribute("id", "new-project-button");

        topContainer.appendChild(projectNavTitle);

        for(const project of arrayOfProjects){
            const projectDiv = document.createElement("div");
            const projectNameButton = document.createElement("button");
            const deleteButton = document.createElement("button");

            projectNameButton.textContent = project.nameOfProject;
            deleteButton.textContent = "X";

            projectDiv.appendChild(projectNameButton);
            projectDiv.appendChild(deleteButton);
            topContainer.appendChild(projectDiv);
        }

        projectNavigationDiv.appendChild(topContainer);
        projectNavigationDiv.appendChild(addProjectButton);
        contentDiv.appendChild(projectNavigationDiv);
    }

    static generateDirectoryOfTodos(projectName, arrayOfTodos){
        const contentDiv = document.querySelector("#content");
        let todoListDiv = document.querySelector("#todo-list");
        const wrapperDiv = document.createElement("div");
        const todoListHeader = document.createElement("div");
        const projectNameHeader = document.createElement("h1");
        const addTodoButton = document.createElement("button");

        if(todoListDiv === null){
            todoListDiv = document.createElement("div");
            todoListDiv.setAttribute("id", "todo-list");
        }else {
            todoListDiv.textContent = "";
        }

        projectNameHeader.textContent = projectName;
        addTodoButton.textContent = "Add Todo";

        todoListHeader.appendChild(projectNameHeader);
        todoListHeader.appendChild(addTodoButton);
        wrapperDiv.appendChild(todoListHeader);
        todoListDiv.appendChild(wrapperDiv);

        wrapperDiv.setAttribute("id", "todo-wrapper");
        todoListHeader.setAttribute('id', "todo-list-header");

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
            todoDiv.setAttribute("class", "todo-item");
            leftContainer.setAttribute("class", "left-container");
            rightContainer.setAttribute("class", "right-container");
            checkbox.setAttribute("type", "checkbox");
            detailsButton.setAttribute("class", "details");
            editButton.setAttribute("class", "edit");
            deleteButton.setAttribute("class", "delete");

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
            wrapperDiv.appendChild(todoDiv);
        }

        contentDiv.appendChild(todoListDiv);
    }

    static generateInitialWebpage(arrayOfProjects, projectName, arrayOfTodos){
        DOM_Manipulator.generateHeader();
        DOM_Manipulator.generateProjectNavigation(arrayOfProjects);
        DOM_Manipulator.generateDirectoryOfTodos(projectName, arrayOfTodos);        
    }
}