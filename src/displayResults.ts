function show(text:string, container:HTMLElement):HTMLElement
{
    container.textContent = text;
    return container;
};

// displayDefinitions() takes an array of definitions, iterates through it and displays them in list tags <li>

function displayDefinitions(array:any):any
{
  let definitionContainer = document.getElementById('definitionList');
  definitionContainer.innerHTML = '';
//   console.log(array);
  for(let i = 0; i < array.length; i++)
  {
    let def = show(array[i], document.createElement('li'));
    definitionContainer.appendChild(def);
  };
};

function sortResponse(list:any)
{
    const partsOfSpeech = getPartsOfSpeech(list);
    const definition = getDefinitions(list);
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
        // console.log(array);
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
    return{
        Name: list[0].word,
        Sound: list[0].phonetic,
        PartsOfSpeech: partsOfSpeech,
        Definitions: definition
    };
};


export {
    sortResponse,
    show,
    displayDefinitions
};