- [ ] Why would you use class component over function components (removing hooks from the question)?

To get practice for dealing with legacy code or if future employer wants to use classes.
But Hooks allows for a better implementation of DRY code. So not much past that, imo.

- [ ] Name three lifecycle methods and their purposes.

Birth of your component (componentDidMount())
    Called as soon as component is mounted
    Setting state here will cause another render but will happen before the browser updates (no double-rendering)
    API calls made from
Update – Growth of your component (componentDidUpdate())
    Rendering can happen
    Updates the DOM in response to props or state changes
    Not a good place to modify state
Unmount – Death of your component (componentWillUnmount())
    Cleanup actions here: 
        clear timers, cancel api calls, clear cache...

- [ ] What is the purpose of a custom hook?

    To assign state (memory) to hold our custom values and allow us to mutate them (use a function to update state).. 
    Allows us to use lifecycle functions in a functional component.

- [ ] Why is it important to test our apps?
    Testing is expensive if left to the production model. It is better practice to write tests that can help bring immediate light to problems that may develop (revisions done by others, etc..)