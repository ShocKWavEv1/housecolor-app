"use client";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<Props> = ({ error, reset }) => {
  return <div>{error.message}</div>;
};

export default ErrorPage;
