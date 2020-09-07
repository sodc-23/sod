import * as React from 'react';

interface LinkProps {
  url: string;
  children: React.ReactNode;
}

const Link: React.FunctionComponent<LinkProps> = ({ url, children }: LinkProps) => (
  <a href={url} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export default Link;
