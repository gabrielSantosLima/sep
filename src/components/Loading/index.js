import React from 'react';

import { Container, Block } from './styles';

const Loading = () => {
  return(
      <Container>
        <Block delay={.1}/>
        <Block delay={.2}/>
        <Block delay={.3}/>
      </Container>
  );
}

export default Loading;