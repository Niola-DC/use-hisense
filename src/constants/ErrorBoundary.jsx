import { useState } from "react";

export const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  return hasError ? (
    <h2>Something went wrong.</h2>
  ) : (
    <ErrorCatcher setHasError={setHasError}>{children}</ErrorCatcher>
  );
};

const ErrorCatcher = ({ children, setHasError }) => {
  try {
    return children;
  } catch (error) {
    console.error("Error caught in boundary:", error);
    setHasError(true);
    return <h2>Something went wrong.</h2>;
  }
};
