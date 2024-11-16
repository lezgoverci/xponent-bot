import React from 'react';

const ExternalPage = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="https://versatile-syscall-2oumxz.sandbox.livekit.io"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="External Website"
      />
    </div>
  );
};

export default ExternalPage;