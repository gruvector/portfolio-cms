declare module 'react-reveal/Slide' {
  import React from 'react';

  class Animation extends React.Component<{
    children?: React.JSX.Element | React.JSX.Element[];
    left?: boolean;
    right?: boolean;
  }> {}
  export default Animation;
}
