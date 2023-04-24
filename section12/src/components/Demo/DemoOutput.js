import React from 'react';
import MyParagraph from './MyParagraph';

function DemoOutput(props) {
  console.log('App Run in DemoOutput.js');
  return <MyParagraph>{props.show ? 'This is new!' : ''}</MyParagraph>;
}

export default React.memo(DemoOutput);
