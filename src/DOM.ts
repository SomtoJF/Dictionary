function createContainers(content:Array<string>, parentElement: HTMLElement, elementToGenerate:string)
{
    let elementList = [];
    for(let i = 0; i < content.length; i++)
    {
        let element = document.createElement(elementToGenerate);
        element.textContent = content[i];
        elementList[elementList.length] = element;
        parentElement.appendChild(element);
    };
    return elementList;
};

export {
    createContainers
};