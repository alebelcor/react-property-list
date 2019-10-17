import React from 'react';

export default (WrappedComponent, props) => {
  return (
    <WrappedComponent {...props}/>
  );
};
