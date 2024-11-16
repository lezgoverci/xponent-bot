'use client';

import { openLink } from '@telegram-apps/sdk-react';
import { Page } from '@/components/Page';
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import {
  Avatar,
  Button,
  Cell,
  List,
  Navigation,
  Placeholder,
  Section,
  Text,
  Title,
} from '@telegram-apps/telegram-ui';
import { Link } from '@/components/Link/Link';

import { DisplayData } from '@/components/DisplayData/DisplayData';

import './styles.css';

export default function TONConnectPage() {
  const wallet = useTonWallet();
  if (!wallet) {
    return (
      <Page back={true}>
        <Placeholder
          className="ton-connect-page__placeholder"
          header="TON Connect"
          description={
            <>
              <Text>
                To display the data related to the TON Connect, it is required
                to connect your wallet
              </Text>
              <TonConnectButton className="ton-connect-page__button" />
            </>
          }
        />
      </Page>
    );
  }

  const {
    account: { chain, publicKey, address },
    device: {
      appName,
      appVersion,
      maxProtocolVersion,
      platform,
      features,
    },
  } = wallet;

  return (
    <Page back={false}>
      <List>
        {'imageUrl' in wallet && (
          <>
            <Section>
              <Cell
                before={
                  <Avatar src={wallet.imageUrl} alt="Provider logo" width={60}
                    height={60} />
                }
                after={<Navigation>About wallet</Navigation>}
                subtitle={wallet.appName}
                onClick={(e) => {
                  e.preventDefault();
                  openLink(wallet.aboutUrl);
                }}
              >
                <Title level="3">{wallet.name}</Title>
              </Cell>
            </Section>
            <TonConnectButton className="ton-connect-page__button-connected" />
          </>
        )}
        <Link href="/xavier">
          <Button
            mode="filled"
            size="s"
            // onClick={() => {
            //   //redirect to /xavier page

            // }}
          >
            Call Xavier 2
          </Button>
        </Link>

        <DisplayData
          header="Account"
          rows={[
            { title: 'Address', value: address },
            { title: 'Chain', value: chain },
            { title: 'Public Key', value: publicKey },
          ]}
        />
        <DisplayData
          header="Device"
          rows={[
            { title: 'App Name', value: appName },
            { title: 'App Version', value: appVersion },
            { title: 'Max Protocol Version', value: maxProtocolVersion },
            { title: 'Platform', value: platform },
            {
              title: 'Features',
              value: features
                .map(f => typeof f === 'object' ? f.name : undefined)
                .filter(v => v)
                .join(', '),
            },
          ]}
        />
      </List>
    </Page>
  );
};
