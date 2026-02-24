import { PHASE_DEVELOPMENT_SERVER } from 'next/constants';

export default (phase: any) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        remotePatterns: [new URL('https://randomuser.me/api/portraits/**')],
      },
    };
  }

  return {};
};
