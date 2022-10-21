let resultsContainer = document.getElementById('results');
import { createContainer } from "./DOM";

function show(text:string)
{
    const container = createContainer(text);
    resultsContainer.appendChild(container);
};

function sortResponse(list:any)
{
    function getPartsOfSpeech(list:any)
    {
        const resultArray = [];
        for(let i = 0; i < list.length; i++)
        {
            resultArray[resultArray.length] = list[0].meanings[0].partOfSpeech;
        };
        return resultArray;
    }
    const partsOfSpeech = getPartsOfSpeech(list);
    return{
        Name: list[0].word,
        Sound: list[0].phonetic,
        PartsOfSpeech: partsOfSpeech
    };
};


export {
    sortResponse,
    show
};