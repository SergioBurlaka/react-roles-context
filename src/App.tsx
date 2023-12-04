import { RootRoutes } from "./router/Root.routes";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryFallback } from "./compomemts/ErrorBoundaryFallback";

import { AntThemeProvider } from "@shared/lib";

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorBoundaryFallback}
      onReset={() => {
        console.log("hello");
      }}
    >
      <AntThemeProvider>
        <RootRoutes />
      </AntThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
