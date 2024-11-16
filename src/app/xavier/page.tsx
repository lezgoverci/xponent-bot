import React from 'react';
import { Page } from '@/components/Page';

const ExternalPage = () => {
  return (
    <Page>
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="https://versatile-syscall-2oumxz.sandbox.livekit.io"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="External Website"
        allow="camera; microphone"
      />
    </div>
    </Page>
  );
};

export default ExternalPage;