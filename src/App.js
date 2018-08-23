import React from 'react';
import styled from 'styled-components';

import './styles/global';

const Title = styled.h1`
  color: #fff;
  font-size: 32px;
`;

const App = () => (
  <div className="App">
    <Title>Hello World</Title>
  </div>
);

export default App;
