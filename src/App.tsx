import { useState } from 'react';
import Header from './Header.tsx';
import goalsImg from './assets/goals.jpg';
import CourseGoalList from './components/CourseGoalList.tsx';

//
export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
};

// alternative will be build in Array[] a type to pass to <>

export default function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  function handleDelete(id: number) {
    setGoals((prevGoal) => prevGoal.filter((goal) => goal.id !== id));
  }

  const newGoals: CourseGoalType = {
    id: Math.random(),
    title: 'Learn react + ts',
    description: 'learn in depth',
  };

  function handleGoal() {
    setGoals((preGoals) => {
      return [...preGoals, newGoals];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1> Your Course Goals</h1>
      </Header>
      <button onClick={handleGoal}>Add Goal</button>
      <CourseGoalList goals={goals} onDeleteGoal={handleDelete} />
    </main>
  );
}
