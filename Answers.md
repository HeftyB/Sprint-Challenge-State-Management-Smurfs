1. What problem does the context API help solve?

context API solves the difficulty of accessing state data throughout the application.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions are payloads of information, they are the only source of information for the store and are sent to the store via dispatch().

reducers are where redux gets the state predictability, a reducer will specify exactly how the state is going to update in response of the action that is sent to the store. 

store is a single object that holds and allows access to the applications state, application state is immutable thus known as a single source of truth.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state date available throughout the application, component state is local to the individual data. 
examples:
application - userdata
component - formdata

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux thunk is middleware which allows the flow to make async operations ie - api calls inside actions

1. What is your favorite state management system you've learned and this sprint? Please explain why!

redux because i am not a whimp
