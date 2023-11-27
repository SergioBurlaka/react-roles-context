import "./App.css";

import { RootRoutes } from "./router/Root.routes";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryFallback } from "./compomemts/ErrorBoundaryFallback";

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorBoundaryFallback}
      onReset={() => {
        console.log("hello");
      }}
    >
      <RootRoutes />
    </ErrorBoundary>
  );
}

export default App;
