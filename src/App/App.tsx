import { RootRoutes } from "../router/Root.routes";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryFallback } from "../compomemts/ErrorBoundaryFallback";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { AntThemeProvider, reactQueryClient } from "@shared/lib";
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
          <QueryClientProvider client={reactQueryClient}>
            <RootRoutes />
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          </QueryClientProvider>
        </InterceptorsProvider>
      </AntThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
