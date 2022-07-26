import React from 'react';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className='app-wrapper'>
      <div></div>
      {children}
    </div>
  );
}

export default Layout;
