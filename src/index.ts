import "./index.css";
import display from "./screen";
import getDefinition from "./API";
const form = <HTMLFormElement>document.getElementById("search-form");
const input = <HTMLInputElement>document.getElementById("word-input");

display.home();

form.addEventListener("submit", (e) => {
  getDefinition(input.value);
  e.preventDefault();
});
