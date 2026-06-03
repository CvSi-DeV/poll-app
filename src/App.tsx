import Poll from "./components/Poll";
import type { Choice } from "./types/Poll";
import { INITIAL_CHOICES, INITIAL_QUESTION } from "./data/InitialPoll";
import { useState } from "react";

function App() {

  // States
  const [choices, setChoices] = useState<Choice[]>(INITIAL_CHOICES);

  const question = INITIAL_QUESTION

  //Handlers
  //ajout d'un vote
  const handleOnVote = (id: number) => {
    setChoices(choices.map((choice) =>
      choice.id === id ?
        { ...choice, votes: choice.votes + 1 }
        : choice
    ));
  };

  //reset des votes
  const handleOnReset = () => {
    setChoices(choices.map(c => ({ ...c, votes: 0 })));
  };

  return (
    <div>
      <Poll question={question} choices={choices} onVote={handleOnVote} onReset={handleOnReset} />
    </div>
  )
}

export default App;
