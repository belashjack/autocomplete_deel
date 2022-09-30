#Answers

1. What is the difference between Component and PureComponent? give an
example where it might break my app.

PureComponent is performing "shallow compare" of props, thus allowing to opt-out of rendering process. We can do the same using `shouldComponentUpdate` function.

It should not break our app unless we mutate state or props. However, it can cause performance degradation because premature optimizations is never a good thing.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
that?

Contexts just doesn't pay attention to shouldComponentUpdate

3. Describe 3 ways to pass information from a component to its PARENT.

    a) via callback
    b) via state management like Redux
    c) via Context API
    b) global variable 😅

4. Give 2 ways to prevent components from re-rendering.

    a) shouldComponentUpdate or React.memo() with useMemo() or useCallback()
    b) change useState() to useRef()

5. What is a fragment and why do we need it? Give an example where it might
break my app.

To avoid creating parent elements like `div`. It should not break out app unless developer is dumb

6. Give 3 examples of the HOC pattern.

    a) withRouter() from react-router
    b) connect() from react-redux

7. what's the difference in handling exceptions in promises, callbacks and
async...await.

Promise has .catch(), callbacks usually follow "error first" principle (in Node), with aync..await we use simple try..catch block

8. How many arguments does setState take and why is it async.

Two argument, first either function or object, second is callback. It is async because of performance optimizations.

9. List the steps needed to migrate a Class to Function Component.

    a) remove class keywords
    b) more `render` method to the Function Component body
    c) more lyfecycle methods to appropriate hooks
    d) change setState() to useState(), maybe split the state to multiple

10. List a few ways styles can be used with components.
    a) inline
    b) CSS Modules
    c) just import file with slyles
    d) Styled Components
    e)...

11. How to render an HTML string coming from the server.

dangerouslySetInnerHTML