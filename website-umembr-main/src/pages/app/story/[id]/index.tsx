import type { NextPage, GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Memories } from '@/screens';
import { Layout } from '@/components';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { storySelector } from '@/store/selectors';
import { base_domain, base_url, cdn_url, fallbackRestUrl } from '@/utils';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import Masonry from '@mui/material/Masonry';
import Main from './Main';

const MemoriesPage = ({ pageProps: { story } }: InferGetServerSidePropsType<any>) => {
  return (
    <Layout>
      <Head>
        <title>{`${story?.title ?? ''} - Memvy`}</title>
        <meta name='description' content={story?.description ?? ''} />

        <meta property='og:url' content={`${base_url}/${story?.title}'`} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={`${story?.title ?? ''} - Memvy`} />
        <meta property='og:description' content={story?.description ?? ''} />
        <meta property='og:image' content={`${cdn_url}${story?.cover_image ?? ''}`} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content={base_domain} />
        <meta property='twitter:url' content={`${base_url}/${story?.title}'`} />
        <meta name='twitter:title' content={`${story?.title ?? ''} - Memvy`} />
        <meta name='twitter:description' content={story?.description ?? ''} />
        <meta name='twitter:image' content={`${cdn_url}${story?.cover_image ?? ''}`} />
      </Head>
      {/* <Memories /> */}
      <Main />
    </Layout>
  );
};

export const getServerSideProps = (async (ctx) => {
  const { id } = ctx.query || {};
  let data;
  try {
    const res = await fetch(`${fallbackRestUrl}/meta/${id}`);

    data = await res.json();
  } catch (error) {
  }
  return {
    props: {
      ...(await serverSideTranslations('en', ['common'])),
      story: data?.result || {},
    },
  };
}) satisfies GetServerSideProps<any>;

export default MemoriesPage;
