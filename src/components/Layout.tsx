import React from 'react';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className='app-wrapper'>
      <h1>Layout</h1>
      {children}
    </div>
  );
}

export default Layout;
