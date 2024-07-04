import React from 'react';

const CollapseContext = React.createContext({
  isCollapsed: false,
  setIsCollapsed: () => {},
});

export default CollapseContext;