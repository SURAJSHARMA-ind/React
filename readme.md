# Index-page

# Lecture 01
### Topics Covered:
- Basics of React
- Setting up a React project using Vite
- Introduction to props and components.

## Props :
In React, "props" (short for properties) are a fundamental concept used for passing data from one component to another. Props are read-only and help create dynamic and interactive React applications by allowing components to communicate and share data.
***
# Lecture 02
### Topics Covered:
- Hooks in react
- useState
- useEffect

## Hooks:
In Lecture 02, we learned about "hooks" in React.  React Hooks are a powerful feature introduced in React version 16.8. They allow you to use various React features within functional components without the need for class components. Each React Hook name is prefixed with the word “use". 

### useState:
useState is a React Hook that lets you add a state variable to your component. 
const [state, setState] = useState(initialState)

# Lecture 02_1 
### Topics Covered:
- useEffect:
  
## useEffect:
useEffect helps us do things in our components when something changes. 
For example, if we want to show a message when a button is clicked, we can use useEffect. 
It's like saying, "Hey React, do this when something happens!".

# Lecture 02_2 
### Topics Covered:
- useRef:
  
## useRef:
useRef is a hook in React, a JavaScript library for building user interfaces. This hook is used to create a mutable reference that persists across renders of a component. It's commonly used for accessing or storing a reference to a DOM element or a value that needs to persist between renders without causing re-renders.

# Lecture 03
### Topics covered
- conditonal rendering
- Render list using map()

## conditional rendering
- Conditional rendering in React allows components to render different output based on certain conditions.
- This can be achieved using conditional statements such as if or ternary operators within the JSX code.

# Lecture 04 
### Topics covered
- Fetch api in react
. Handling Responses: Processing the response using response.json() to extract JSON data.
. Updating State: Storing the fetched data in state variables using React's useState hook.
. Rendering Data: Dynamically rendering the fetched data in the user interface using map().

# Lecture 05 
### Topics covered
- Event Handling. 
- Handling Form. (use spread operator)

``` 
 const onClickHandler = () => {
    setMyDetail({ ...myDetail , myname:"Sam" })
    // ...myDetail =  The triple dots are known as the spread operator, which takes an iterable(array, string, or object) and expands the iterable to individual values.
  } 
  ```

# Lecture 06
### Create a TodoList

## Add features like:
- Add todo.
- Edit todo. 
- Delete todo.
- Sorting todos. (All todos , Completed , Not Completed)

# Lecture 07
### Create a Password_generator


