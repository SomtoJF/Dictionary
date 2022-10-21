let resultsContainer = document.getElementById('results');
import { createContainer } from "./DOM";

function show(text:string)
{
    const container = createContainer(text);
    resultsContainer.appendChild(container);
};

function sortResponse(object:any)
{
    return{
        Name: object[0].word,
        Sound: object[0].phonetic,
        
    };
};


export {
    sortResponse,
    show
};