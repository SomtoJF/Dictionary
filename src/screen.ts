let resultsContainer = document.getElementById("results");
import {sortResponse, show} from './displayResults'

type ScreenInterface = {
  node: HTMLElement;
  clear: any;
  error: any;
  home: any;
  results: any;
};

function results(node: HTMLElement): ScreenInterface {
  function clear() {
    node.innerHTML = "";
  }

  function error() {
    clear();
    clearBackground();
    node.classList.add("error");
    node.innerHTML = '<div>word not found<div>';
  }

  function clearBackground() {
    clear();
    node.classList.remove("error");
    node.classList.remove("home");
  }

  function home() {
    clear();
    clearBackground();
    node.classList.add("home");
  }

  function results(object:any) {
    const response = sortResponse(object);
    clear();
    clearBackground();
    show(response.Name);
    show(response.Sound);
  }

  return {
    node,
    clear,
    error,
    home,
    results
  };
}

const display = results(resultsContainer);
export default display;
