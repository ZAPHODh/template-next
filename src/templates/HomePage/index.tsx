import { Menu } from '@/components/Menu';

import Head from 'next/head';
import * as Styled from './styles';
export type HomePageProps = {
  title?: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const HomePage = ({ title='template' }: HomePageProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Styled.Wrapper>
        <Menu />
       
      </Styled.Wrapper>
    </>
  );
};
