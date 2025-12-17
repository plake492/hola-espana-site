import React from 'react';

export default async function page(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params;

  return <h1>Blog: {slug}</h1>;
}
