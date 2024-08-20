// import { type ReactNode } from 'react';
import { type PropsWithChildren } from 'react';

// type CourseGoalProps = {
//   title: string;
//   description: string;
// };

// type CourseGoalProps = PropsWithChildren; // PropsWithChildren<{title: string}>
type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

export default function CourseGoal({
  title,
  id,
  children,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}
