import display from "./screen";

async function getDefinition(word: string) 
{
  try 
  {
    let response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      {
        mode: "cors",
      }
    );

    response = await response.json();
    display.results(response);
    // console.log(response);
  } 

  catch (response) 
  {
    display.error();
  }
}

export default getDefinition;
