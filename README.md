This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes & Improvements

- In a real project I'll use use-async-effect to fetch data. Also, async and await.
- I usually use react-spring to handle my animations. I decided not to use this time to keep things simple.
- In a real project, I'll use loading states, errors, etc to handle UI Rendering (optimistic or pessimistic)
- With scability in mind, every list of task is inside an object Project. I didn't have time to add the functionaly "Add a new project".
- I'm aware that every time that a new task is added the app is being re render. In a real project I'll use Redux, using memo, useMemo or useCallback. To keep things simple and to make the code easy to read I'm not making any performance optimization.

## How to run?

npm install
npm start
