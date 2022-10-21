function createContainer(content:string):HTMLElement
{
    let container = document.createElement('div');
    container.textContent = content;
    return container;
}

export {
    createContainer
}