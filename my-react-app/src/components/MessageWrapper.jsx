import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Message from './Message.jsx';
import Loader from './Loader.jsx';

function getMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isError = false; 

      if (isError) {
        reject(new Error("Failed to load message"));
      } else {
        resolve("This text was loaded asynchronously ✨");
      }
    }, 1500);
  });
}

const promise = getMessage();

export default function MessageWrapper() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong...</p>}>
      <Suspense fallback={<Loader />}>
        <Message dataPromise={promise} />
      </Suspense>
    </ErrorBoundary>
  );
}