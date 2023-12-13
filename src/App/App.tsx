import { RootRoutes } from "../router/Root.routes";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryFallback } from "../compomemts/ErrorBoundaryFallback";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";

import { AntThemeProvider, reactQueryClient } from "@shared/lib";
import { InterceptorsProvider } from "./providers/InterceptorsProvider";

function App() {
  return (
    <BrowserRouter>
      <AntThemeProvider>
        <InterceptorsProvider>
          <QueryClientProvider client={reactQueryClient}>
            <ErrorBoundary
              FallbackComponent={ErrorBoundaryFallback}
              onReset={() => {
                console.log("hello");
              }}
            >
              <RootRoutes />
            </ErrorBoundary>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </InterceptorsProvider>
      </AntThemeProvider>
    </BrowserRouter>
  );
}

export default App;
