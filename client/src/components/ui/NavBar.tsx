import React, { memo } from 'react';

function NavBar(): JSX.Element {
  console.log('navbar render');
  return <div>NavBar</div>;
}

export default memo(NavBar);
// export default NavBar;
