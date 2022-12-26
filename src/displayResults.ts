function show(text:string, container:HTMLElement):HTMLElement
{
    container.textContent = text;
    return container;
};

// displayTextInList() takes an array of definitions, iterates through it and displays each definition in list tags <li>
function displayTextInList(array:Array<any>, parentElement:HTMLElement):void
{
  parentElement.innerHTML = '';
  for(let i = 0; i < array.length; i++)
  {
    let def = show(array[i], document.createElement('li'));
    parentElement.appendChild(def);
  };
};

function sortResponse(list:Array<any>)
{
    const partsOfSpeech = getPartsOfSpeech(list);
    const definition = getDefinitions(list);
    const synonyms = getSynonyms(list[0].meanings);
    const antonyms = getAntonyms(list[0].meanings);

    function getDefinitions(list:Array<any>):Array<Array<string>>
    {
        let array = [];
        for(let i = 0; i < list[0].meanings.length; i++)
        {
            array[i] = [];
            for(let j = 0; j < list[0].meanings[i].definitions.length; j++)
            {
                array[i][j] = list[0].meanings[i].definitions[j].definition;
            };
        };
        return array;
    };

    function getPartsOfSpeech(list:any):Array<string>
    {
        const resultArray = [];
        for(let i = 0; i < list[0].meanings.length; i++)
        {
            resultArray[resultArray.length] = list[0].meanings[i].partOfSpeech;
        };
        return resultArray;
    };

    function getSynonyms(list:Array<any>):Array<Array<string>>
    {
        let synonymArray = [];
        for(let i = 0; i < list.length; i++)
        {
            synonymArray[i] = list[i].synonyms;
        };
        return synonymArray;
    };

    function getAntonyms(list:Array<any>):Array<Array<string>>
    {
        let antonymArray = [];
        for(let i = 0; i < list.length; i++)
        {
            antonymArray[i] = list[i].antonyms;
        };
        return antonymArray;
    }

    return{
        Name: list[0].word,
        Sound: list[0].phonetic,
        PartsOfSpeech: partsOfSpeech,
        Definitions: definition,
        Synonyms: synonyms,
        Antonyms: antonyms
    };
};


export {
    sortResponse,
    show,
    displayTextInList
};