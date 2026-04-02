import { use } from 'react';

export default function Message({ dataPromise }) {
  const text = use(dataPromise);

  return (
    <div>
      <h3>Message:</h3>
      <p>{text}</p>
    </div>
  );
}