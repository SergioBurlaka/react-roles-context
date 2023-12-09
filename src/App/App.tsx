import { RootRoutes } from "../router/Root.routes";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryFallback } from "../compomemts/ErrorBoundaryFallback";

import { AntThemeProvider } from "@shared/lib";
import { InterceptorsProvider } from "./providers/InterceptorsProvider";

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorBoundaryFallback}
      onReset={() => {
        console.log("hello");
      }}
    >
      <AntThemeProvider>
        <InterceptorsProvider>
          <RootRoutes />
        </InterceptorsProvider>
      </AntThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
