'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Page } from '@/components/Page';
import tonSvg from './_assets/ton.svg';
import { Cell, List, Section } from '@telegram-apps/telegram-ui';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(true);

  useEffect(() => {
    router.push('/ton-connect');
    setRedirecting(false);
  }, [router]);

  if (redirecting) {
    return null; // or a loading spinner, or any other placeholder
  }

  return (
    <Page back={false}>
      <List>
        <Section
          header="Features"
          footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
        >
          <Link href="/ton-connect">
            <Cell
              // before={
              //   <Image
              //     src={tonSvg.src}
              //     style={{ backgroundColor: '#007AFF' }}
              //   />
              // }
              subtitle="Connect your TON wallet"
            >
              TON Connect
            </Cell>
          </Link>
        </Section>
        {/* Other sections */}
      </List>
    </Page>
  );
}