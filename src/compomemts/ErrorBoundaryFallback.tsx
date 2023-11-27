import type { FC } from "react";

import type { FallbackProps } from "react-error-boundary";

export const ErrorBoundaryFallback: FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  // const navigate = useNavigate();

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button
        onClick={() => {
          resetErrorBoundary();
          // navigate("/");
        }}
      >
        Try again
      </button>
    </div>
  );
};
