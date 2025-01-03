import { FC } from 'react';

import { PREFIX_PATH, PRIVATE_ENDPOINT } from '@/config/environments';

interface Props {
  title: string;
}

export const Title: FC<Props> = ({ title }) => {
  console.log('Priv:', PRIVATE_ENDPOINT, 'Public:', PREFIX_PATH);
  return <div>{title}</div>;
};
