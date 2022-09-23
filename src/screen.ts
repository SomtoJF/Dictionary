let resultsContainer = document.getElementById('results');

type ScreenInterface = 
{
    node: HTMLElement;
    clear: any;
    error: any;
    clearError :any;
}

function results(node:HTMLElement):ScreenInterface
{
    function clear()
    {
        node.innerHTML = "";
    };

    function error()
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
        error,
        clearError
    };
};

const display = results(resultsContainer);
export default display ;