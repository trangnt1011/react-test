import React from 'react';

const LoadingIndicator = () => {
  return <div>Loading...</div>;
};

const ErrorHandler = () => {
  return <div>An error occurs.</div>;
};

const PageRendered = (Wrapped) => {
  return (props: any) => {
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
    );
  };
};

export default PageRendered;
