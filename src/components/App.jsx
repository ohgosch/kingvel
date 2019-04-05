import React from 'react';

import StyleTemplate from '@/styles/utils/template';
import { Header } from '@/components/skeleton/Header';
import { Home } from '@/components/pages/Home';

export const App = () => {
  return (
    <React.Fragment>
      <StyleTemplate />
      <Header />
      <Home />
    </React.Fragment>
  );
};

export default App;
