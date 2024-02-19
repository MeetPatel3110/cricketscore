const API_KEY="f0ab1a54-4eb7-40ee-a63f-0ebb13c029c3"

//get all the matches[upcoming matches]

export const getMatches=()=>{

    const url="https://api.cricapi.com/v1/matches?apikey=f0ab1a54-4eb7-40ee-a63f-0ebb13c029c3&offset=0?apikey=${API_KEY}";

    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log("ERROR : ",error));
};