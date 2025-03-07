import { useState, useEffect } from "react";

export const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);
  
  // Set up global error handler for promise rejections
  useEffect(() => {
    const handleUnhandledRejection = (event) => {
      console.error("Unhandled promise rejection:", event.reason);
      
      // Check if it's the specific error you're looking for
      if (event.reason instanceof Error && 
          event.reason.name === "NotSupportedError" && 
          event.reason.message.includes("Failed to load because no supported source was found")) {
        setHasError(true);
      }
    };
    
    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    
    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);
  
  return hasError ? (
    <div>
      <h2>Media Loading Error</h2>
      <p>The requested media could not be loaded. The format may be unsupported.</p>
    </div>
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