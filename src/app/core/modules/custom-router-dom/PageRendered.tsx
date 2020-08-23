import React from 'react';

const LoadingIndicator = () => {
  return <div>Loading...</div>;
};

const ErrorHandler = () => {
  return <div>An error occurs.</div>;
};

const PageRendered = (Wrapped) => {
  return function (props: any) {
    // Handle a specific logic then return a new component
    return (
      props.isLoading ? (
        <LoadingIndicator />
      ) : (
        props.errors ? (
          <ErrorHandler {...props.errors} />
        ) : (
          <Wrapped {...props.data} />
        )
      )
    )
  }
}
