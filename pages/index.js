import React, { useEffect, useState } from 'react';

const InputElement = () => {
  const randomBoolean = Math.random() >= 0.5;
  const [isLoading, setIsLoand] = useState(randomBoolean);

  useEffect(() => {
    setTimeout(() => {
      setTimeout(() => {
        setIsLoand(false);
      }, 2000);
    });
  });

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <input placeholder="Enter Some Text" />
  );
};

export default InputElement;
