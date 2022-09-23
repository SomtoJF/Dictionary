let resultsContainer = document.getElementById('results');

type ScreenInterface = 
{
    node: HTMLElement;
    clear: any;
    error: any;
    home :any;
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
        clearBackground();
        node.classList.add('error');
    };

    function clearBackground()
    {
        clear();
        node.classList.remove('error');
        node.classList.remove('home');
    }

    function home()
    {
        clear();
        clearBackground();
        node.classList.add('home');
    }

    return{
        node,
        clear,
        error,
        home
    };
};

const display = results(resultsContainer);
export default display ;