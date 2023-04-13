import React from 'react';


function Pagenotfound() {
  return (
    <div className='headpad'>
    <div className='headpad' style={{ textAlign: 'center', color: 'red', margin: '10%', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: '25px' ,paddingBottom: '30px'}}>
      <h1>Oops! 404 Error</h1>
      <h2>We can't seem to find the page you're looking for</h2>
      <h5>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</h5>
    </div>
    </div>
  );
}

export default Pagenotfound;