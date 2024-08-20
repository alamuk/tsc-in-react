import { type FormEvent, useRef } from 'react';

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const enterGoal = goal.current!.value;
    const enterSummary = summary.current!.value;
    event.currentTarget.reset(); // build in method from html elements
    onAddGoal(enterGoal, enterSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Your goal</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button> Add Goal</button>
      </p>
    </form>
  );
}
