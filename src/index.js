import { ProjectsManager } from "./ProjectsManager";
import { Project } from "./Project";
import {Todo} from "./Todo";

let pm = new ProjectsManager();
let p1 = new Project("home-tasks");
let p2 = new Project("shopping-tasks");

p1.addTodo(new Todo("wash dishes", "clean the dishes", "3/13/89", "low"));
p2.addTodo(new Todo("pick milk", "get dat milk", "8/31/24", "high"));
pm.addProject(p1);
pm.addProject(p2);


for(const project of pm.listOfProjects){
    console.log(project.nameOfProject);
}
console.log("");

pm.removeProject(1);

for(const project of pm.listOfProjects){
    console.log(project.nameOfProject);
}
