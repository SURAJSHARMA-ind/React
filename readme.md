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
### Create a TodoList : [Live Preview](https://todo-react-js-phi.vercel.app/)
## Add features like:
- Add todo.
- Edit todo. 
- Delete todo.
- Sorting todos. (All todos , Completed , Not Completed)

# Lecture 07
### Create Password generator :  [Live Preview](https://password-generator-orpin-theta.vercel.app/)
## Add features like:
- Include Numbers,Special Characters to password.
- Set range of password
- copy password to clipboard
  
# Lecture 08
### Topics covered
- React Router
- useLocation: Provides information about the current URL, pathname, and query parameters.
- Outlet: Renders nested route content in a parent route component.
- useParams: For Dynamic routing we use useParams hook which is Used to handle URLs with variable segments, such as product IDs in e-commerce applications.

# Lecture 09
### Topics covered
- Prop drilling : Prop drilling is basically a situation when the same data is being sent at almost every level due to requirements in the final level. 

- useContext hook : It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

![prop drilling image](<Prop drilling.png>)

# Lecture 10
## Cart Clone
 <b>status</b> : Not completed yet
- Add To Cart feature.
- Use api to fetch data.
- Use react router.
- Use useContext hook.h
- Use Local Storage.


# Lecture 11
### Create a Counter using redux toolkit
### Topics covered
- <b>Redux toolkit</b> : Redux Toolkit is an official, recommended library that provides a set of tools to simplify the use of Redux for managing application state. It helps reduce boilerplate code, simplifies the setup process, and includes utilities for common tasks like creating reducers, handling asynchronous logic, and configuring the Redux store.

- <b>Store</b>:  The Redux store is a centralized place to manage the global state of your application. It holds the entire state tree of your app and allows you to dispatch actions to change this state.

### configureStore : 

```
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

```
- <b>Reducer</b> : A reducer is a function that determines how the state of your application changes in response to an action. In Redux Toolkit, reducers are often defined within slices using createSlice. 

- <b>Slice</b> : A slice is a collection of Redux reducer logic and actions for a specific feature of your application. Redux Toolkit's createSlice function allows you to define a slice, which includes the state, reducers, and action creators.

```
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

```

- <b> useSelector</b>: useSelector is a hook provided by React-Redux that allows you to extract data from the Redux store state. It takes a selector function as an argument, which is used to select a piece of state from the store.

- <b>useDispatch</b> : useDispatch is a hook that gives you access to the dispatch function from the Redux store. It allows you to send actions to the Redux store, which can then update the state.

```
// Import necessary dependencies
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice'
import { Link } from 'react-router-dom'
import Navbar from './component/Navbar'

function App() {
  // useSelector: Extracts the current count value from the Redux store
  const count = useSelector((state) => state.counter.value)

  // useDispatch: Returns the dispatch function to send actions to the Redux store
  const dispatch = useDispatch()

  return (
    <>
      
      <Link to={'/navbar'}>Navbar</Link>
      
      {/* Display the current count */}
      <h1>count is {count}</h1>
      
      {/* Button to increment the count */}
      <button onClick={() => dispatch(increment())}>increment</button>

      {/* Button to decrement the count (optional) */}
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </>
  )
}

export default App

```