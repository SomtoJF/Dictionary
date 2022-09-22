type ScreenInterface = 
{
    node: HTMLElement;
    clear: any;
    displayError: any;
    clearError :any;
}

function results(node:HTMLElement):ScreenInterface
{
    function clear()
    {
        node.innerHTML = "";
    };

    function displayError()
    {
        clear();
        node.classList.add('error');
    };

    function clearError()
    {
        clear();
        node.classList.remove('error');
    }

    return{
        node,
        clear,
        displayError,
        clearError
    };
};

export default results;