import { UI_Controller } from "./controller/UI_Controller";
import "./styles.css";

const controller = new UI_Controller();

document.addEventListener("DOMContentLoaded", () => controller.initalizeApp());