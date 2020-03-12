1. What problem does the context API help solve?

It solves the problem of prop drilling.

The store is known as the single source of truth because it is our state tree that is not rewritten or reshaped and which contains the whole application state.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are payloads of information that send data from the app to the store. They must have a type but the payload is optional. A reducer is a function that determines changes to an application's state. A store is a JavaScript object that allows components to share state. It is a kind of database.

The store is known as the single source of truth because it is our state tree that is not rewritten or reshaped and which contains the whole application state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global, and component state is local. As props are passed downwards from application state, sub components may not have access to the entire applicate state.

Therefore, a good time to use application state over component state is when you want any component to access slices of state from the store and so there's no need of passing props back and forth.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets us dispatch asynchronous actions like a get request in order to allow promises to be resolved.

The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

It changes our action-creators so that we can return them as functions instead of objects. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is my favourite state management system because it allows us to dispatch an action to the state store to update a property for whichever component, instead of passing props down the application state tree. 

The react-redux library's connect HOC (higher order component) which gives us a "teleportation" capability where we do not have to pass props down a chain is extremely useful for more complex and professional apps and therefore I'd like to get to know it better in future.


<!-- testing -->