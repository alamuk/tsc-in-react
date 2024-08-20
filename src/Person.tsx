import { useState } from 'react';

type Test1 = {
  name: string;
  age: number;
  id: number;
};

const newTest1: Test1 = {
  name: 'Md Shah',
  age: 35,
  id: Math.random(),
};

export default function Person() {
  const [test1s, setTest1s] = useState<Test1[]>([]);
  function handleTestPerson() {
    setTest1s((prevTest1) => {
      return [...prevTest1, newTest1];
    });
  }

  return (
    <div>
      <ul>
        {test1s.map((test) => (
          <li key={test.id}>
            <h1>{test.name}</h1>
            <p>{test.name}</p>
          </li>
        ))}
      </ul>

      <button onClick={handleTestPerson}> Add Person</button>
    </div>
  );
}
