# Task Timer

This project was developed using React. I used only functional components and made extensive use of hooks.

In this project I used the following hooks:
- useState
- useReducer
- useEffect
- useRef
- useCallback

I also created three custom hooks:

- useHeartbeat to control the timer in a way that adjusts for the fact that setTimer is often a few milliseconds later than when it is set because it is asynchronous.
- useSessionStorage to save tasks to session storage.
- useGetWidth to get the width of the window to determine which row component to render.

I previously created a JavaScript Timer as a React class component and made it an npm module so others could use it in their projects. It can be found here: [react-heartbeat](https://www.npmjs.com/package/react-heartbeat). My useHeartbeat hook is an update to this component.

I also wrote a blog article describing how to [create accurate JavaScript timer functions](https://medium.com/@sayes2x/creating-an-accurate-javascript-timer-function-in-react-255f3f5cf50c).

I enjoyed the opportunity to update this timer function to a React hook. I hope you like it.

I deployed [Task Timer](https://sayes2x-task-timer.netlify.com) if you would like to view it online.
