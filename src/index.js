import { DOM_Manipulator } from "./DOM_Manipulator";
import {ProjectsManager} from "./ProjectsManager";
import { Project } from "./Project";
import {Todo} from "./Todo";
import "./styles.css";


let project = new Project("home-tasks");
project.addTodo(new Todo("clean rug", "clean with vacuum cleaner", "8/28/29", "low"));
project.addTodo(new Todo("walk dog", "walk shelly around the hood", "6/8/21", "high"));

let PM = new ProjectsManager();
PM.addProject(project);
PM.addProject(new Project("shopping-list"));


DOM_Manipulator.generateInitialWebpage(PM.listOfProjects, PM.getProject(0).listOfTodos);