let resultsContainer = document.getElementById("results");
const information = document.getElementById("information");
import {sortResponse, show, displayDefinitions} from './displayResults';
import {createContainers} from './DOM';

type ScreenInterface = {
  node: HTMLElement;
  clear: any ;
  error: any;
  home: any;
  results: any;
  hide: any;
  unhide: any;
};

function results(node: HTMLElement): ScreenInterface {
  function clear() {
    node.innerHTML = "";
  }

  function hide() {
    information.style.display = 'none';
  }

  function unhide(){
    information.style.display = 'flex';
  }

  function error() {
    hide();
    clearBackground();
    node.classList.add("error");
    // node.innerHTML = '<div>word not found<div>';
  }

  function clearBackground() {
    node.classList.remove('error');
    node.classList.remove('home');
  }

  function home() {
    hide();
    clearBackground();
    node.classList.add("home");
  }

  function results(object:any) {
    let soundContainer = document.getElementById('sound');
    let wordContainer = document.getElementById('word');
    let speechContainer = document.getElementById('speech');

    const response = sortResponse(object);
    clearBackground();
    unhide();
    show(response.Name, wordContainer);
    show(response.Sound, soundContainer);
    speechContainer.innerHTML = '';
    let partsOfSpeech:Array<HTMLElement> = createContainers(response.PartsOfSpeech, speechContainer , 'button');
    displayDefinitions(response.Definitions[0]);

    for(let i = 0; i < partsOfSpeech.length; i++)
    {
      partsOfSpeech[i].addEventListener('click', ()=>{
        displayDefinitions(response.Definitions[i]);

        partsOfSpeech.forEach((item)=>{
          item.style.backgroundColor = 'transparent';
        });

        partsOfSpeech[i].style.backgroundColor = '#6c63ff';
      });
    };

  };

  return {
    node,
    clear,
    error,
    home,
    results,
    hide,
    unhide
  };
}

const display = results(resultsContainer);
export default display;
