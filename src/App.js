import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Aux from './hoc/Aux';
import HomepageLayout from './components/HomepageLayout/HomepageLayout';
import { GlobalStyle } from './App_SCs';

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>
          <HomepageLayout/>
        </Layout>
      </Aux>
    );
  }
}

export default App;
