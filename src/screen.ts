let resultsContainer = document.getElementById("results");
const information = document.getElementById("information");
import {sortResponse, show, displayTextInList} from './displayResults';
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
    const soundContainer = document.getElementById('sound');
    const wordContainer = document.getElementById('word');
    const speechContainer = document.getElementById('speech');

    const response = sortResponse(object);
    clearBackground();
    unhide();
    show(response.Name, wordContainer);
    show(response.Sound, soundContainer);
    speechContainer.innerHTML = '';
    const partsOfSpeech:Array<HTMLElement> = createContainers(response.PartsOfSpeech, speechContainer , 'button');
    displayTextInList(response.Definitions[0], document.getElementById('definitionList'));
    displayTextInList(response.Synonyms[0], document.getElementById('synonymsList'));
    displayTextInList(response.Antonyms[0], document.getElementById('antonymsList'));

    for(let i = 0; i < partsOfSpeech.length; i++)
    {
      partsOfSpeech[i].addEventListener('click', ()=>{
        displayTextInList(response.Definitions[i], document.getElementById('definitionList'));
        displayTextInList(response.Synonyms[i], document.getElementById('synonymsList'));
        displayTextInList(response.Antonyms[i], document.getElementById('antonymsList'));

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
