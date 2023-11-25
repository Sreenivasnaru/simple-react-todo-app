import { useState } from "react";

export default function Joker() {
  const URL = "https://official-joke-api.appspot.com/random_joke";
  

  const getNewJoke = async () => {
    let res = await fetch(URL);
    let jsonRes = await res.json();
    console.log(jsonRes);
    setJoke({setup: jsonRes.setup, punchline: jsonRes.punchline})
  }
  let [joke, setJoke] = useState(getNewJoke)
  return (
    <div>
      <h2>Joker!</h2>
      <h3 >{joke.setup}</h3>
      <h3>{joke.punchline}</h3>
      <button onClick={getNewJoke}>New Joke</button>
    </div>
  );
}
