import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

export default (phase: any) => {
  const prodImages = [
    {
      protocol: 'https' as const,
      hostname: 'cdn.sanity.io',
      pathname: '/images/**',
    },
  ];

  const testImages = [
    {
      protocol: 'https' as const,
      hostname: 'randomuser.me',
      pathname: '/api/portraits/**',
    },
  ];
  let images = [...prodImages];

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    images = [...prodImages, ...testImages];
  }

  return { images: { remotePatterns: images } };
};
