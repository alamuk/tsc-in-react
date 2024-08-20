# TypeScript in React
[link of this project](https://github.com/academind/react-typescript-course-resources/tree/main/code/03%20React%20TypeScript%20Essentials/01%20Starting%20Project)
### command line 
``` 
1. npm create vite@latest tsc-in-react
2. npm init
3. npm run dev
4. delete - app.css 
5. src - modify - app.tsx | index.css 
6. new FormData = class probided by browser.
7. 

```
# Outsourcing
### Use of
* Outsourcing type by using type and interface. 
* in the parameter object we can make it separate by using - type alias 
* then use it. which makes it more readable. 
* interface is extendable. 
``` tsc
type CourseGoalProps = {
  title: string;
  description: string;
};
// alternative way: 1
interface CourseGoalProps {
  title: string;
  children: ReactNode;
}
// alternative way: 2 this react props types for it jsx: 
type CourseGoalProps = PropsWithChildren; // PropsWithChildren<{title: string}>
type CourseGoalProps = PropsWithChildren<{ title: string }>;
```


### for Children props 
* children's properties have type in typescript.
* remember every component receive the children's props.(theoretically)
* technically, it is correct that there is not children props exit in the object in the type. 

# React Type = for jsx type =
### For Children Props: 
1. type ReactNode
2. type PropsWithChildren<generic> // generic type. // connect with prop type 
3. type FC = means functional component type. it is also a generic type. use with => arrow function. // connect with prop type

* for children = ReactNode type.
* we need to:  import { type ReactNode } from 'react';
* use case: children: ReactNode;
  alternative way :  type courseGoalProps = PropsWithChildren<{title: string}>
* here we can use PropsWithChildren type by importing it from react.
* also it is a generic type where we can specify its type we are using <{title: string}>
* means = it is a object type and inside it we have title which is string type.

* type FC with arrow function:
```ts 
type CourseGoalProps = PropsWithChildren<{ title: string }>;

// const CourseGoal = ({ title, children }):CourseGoalProps  => { 

const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => { // alternative way to assaing a type 
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};

export default CourseGoal;
```
### For Event type in react :
1. form = type FormEvent  // this use only for development purpose. // we dont need it for real production purpose.
2. it needs to be always to be set `event: FormEvent`
3. HTMLFormElement for event.currentTarget

```ts
import { type FormEvent } from 'react';

function handleSubmit(event: FormEvent) {
  event.preventDefault()
}

// but: if we do inline event, we dont need  to write it. 
<form onSubmit={(event) => event.value}> 
// FormEvent<> can be a generic type. 
```
## for input = we can use HTMLInputElement type with hook. `useRef<HTMLInputElement>`


### For Key Props: 
Component Props & The Special "key" Prop
All React components (built-in components and also your custom components) do accept a special key prop 
which is used by React to track specific component instances.

For example, the key prop should always be set when outputting a list of components.

This key prop can be set on custom components even if you didn't specify it in your props type!

For example, the following component code will work:
```ts 
type UserProps = {
name: string;
};

function User({ name }: UserProps) {
return <li>User: {name}</li>;
}

function App() {
const users = [{ name: 'John' }, { name: 'Mary' }, { name: 'Luke' }];

return (
<>
<ul>
{users.map((user, index) => (
<User key={user} name={user.name} />
))}
</ul>
</>
);
}

```
## Generic Type 
 <> = <place holder for value type> = connected type. 
 in react props - PropsWithChildren<> = already comes with place holder<>. 
 so just need to use it with props types with placeholder value in it. like PropsWithChildren<{title: 'hello' }>





### how to use image 
```ts
import { type ReactNode } from 'react';
// import { type PropsWithChildren } from 'react';

// type HeaderProps = PropsWithChildren<{ image: { src: string; alt: string } }>;  
// altenative way: 
type HeaderProps = {
 image: {
  src: string;
  alt: string;
 };
 children: ReactNode;
};
export default function Header({ image, children }: HeaderProps) {
 return (
         <header>
                 <img src={image.src} alt={image.alt} />                                 
 {/*<img {...image} alt={image.alt} />*/} // alternative 
 {children}
 </header>                                                                 
);
}

//------------
alternative;
import { type PropsWithChildren } from 'react';
import { type FC } from 'react';

type HeaderProps = PropsWithChildren<{image: { src: string, alt: string }}>;
const Header: FC<HeaderProps> = ({ image, children }) => {
 return (
         <header>
          <img src={image.src} alt={image.alt}/>
          {children}
         </header>
 );
};

export default Header;

```

# State + React 
- State makes the React Application truly dynamic and interactive. 
- leads to different UIs component being rendered. e.g., button
- `[]never` = unknown type array
- useState()- in here - needs to tell what type array its holding and managing. 
- useState is a  generic function. we can use <> angle bracket after it. // `useState<>`
- useState <here we need to what type of valu we are going to manage>

### To update the state: 
 - if the new state depends on the old state this will be function form = `setGoals(()=> {})`
 - `setGoals((previousState)=> {
return 
})`


### useRef() hook
- extracting input value
- it gives a ref Object{}
- its bring special ref={} props for inline elements. 
- it always gives object with current property `const enterGoal = goal.current.value`
- ! = means = this will never be null . `const enterGoal = goal.current!.value`
- useRef<> can add a generic type 


# where we use it
-  variable 
- object 
- Array 
- union type 
- generic type 
- htmlInput
- HTMLForm 
- events
- useHook 
- useState
- useRef
- call back function 