import React, { useState, useEffect } from 'react';

import PageRendered from '@shared/hocs/PageRendered';

export const AuthProtector = (route) => {
  const PageContent = PageRendered(route.element);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // emulate an asynchronous request
    setTimeout(() => {
      // rerender page after 1s
      setIsLoading(false);
      setData({
        articles: [
          'What is HOC ?',
          'Create a simple HOC',
          'Use the HOC'
        ]
      });
    }, 1000);
  }, []);

  return <PageContent isLoading={isLoading} data={data} />;
};
