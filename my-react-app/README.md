# Async Message App

## Description
This is a simple React app built with Vite. It demonstrates how to use the `use()` hook to work with asynchronous data from a Promise. The app loads a message with a delay to simulate fetching data from a server. It also uses **React Suspense** to show a loader while waiting and **ErrorBoundary** to catch and display errors.

## Installation & Run
Clone the repository and install dependencies:

```bash
git clone git@github.com:chebanilia2018-lab/my-react-app-homework--.git
cd my-react-app-homework--
npm install
npm run dev
```

Open your browser and go to http://localhost:5173
 to see the app in action.

Demo

Check out the live version of the app here: https://async-message-app.vercel.app


Features
- Uses React Suspense for handling loading state
- Uses ErrorBoundary to catch and display errors
- Demonstrates working with Promises and the use() hook
- Asynchronous message loading with simulated delay


Project Structure
my-react-app/
├── src/
│   ├── components/
│   │   ├── Loader.jsx
│   │   ├── Message.jsx
│   │   └── MessageWrapper.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── README.md
└── ...


Notes
- Make sure you have Node.js installed.
- This project is intended for learning async data handling in React.
- Components are separated into individual files for clarity and maintainability.
