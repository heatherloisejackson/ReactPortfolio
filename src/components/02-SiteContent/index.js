import React from 'react';

const SiteContent = (props) => {
  console.log(props)
  return (
    <div>
      {props.children}
    </div>
  );
};

export default SiteContent;