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
      <Page back={false}>
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
            {/* <Section>
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
            </Section> */}
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
            Call Xavier
          </Button>
        </Link>

        <DisplayData
          header="Account"
          rows={[
            { title: 'Name', value: "vercillius mila jr" },
            { title: 'Status', value: "Active" },
          ]}
        />
        <DisplayData
          header="Achievements"
          rows={[
            { title: 'Early Adopter', value: "One of the first 1000 users to join the platform" },
            { title: 'Power User', value: "Completed 100 successful transactions" },
            { title: 'Community Champion', value: "Received 50 positive reviews from other users" },
            { title: 'Premium Member', value: "Subscribed to premium membership for 6 months" },
          ]}
        />
      </List>
 
    </Page>
  );
};
