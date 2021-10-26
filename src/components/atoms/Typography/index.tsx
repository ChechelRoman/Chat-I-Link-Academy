import React from 'react';
import './style.scss';

type TypographyProps =
  | React.HTMLAttributes<HTMLHeadingElement>
  | React.HTMLAttributes<HTMLParagraphElement>;

export const Header1: React.FC<TypographyProps> = ({ children }) => {
  return <h1 className="header1 typography">{children}</h1>;
};

export const Header2: React.FC<TypographyProps> = ({ children }) => {
  return <h2 className="header2 typography">{children}</h2>;
};

export const Header3: React.FC<TypographyProps> = ({ children }) => {
  return <h3 className="header3 typography">{children}</h3>;
};

export const Header4: React.FC<TypographyProps> = ({ children }) => {
  return <h4 className="header4 typography">{children}</h4>;
};

export const Text1: React.FC<TypographyProps> = ({ children }) => {
  return <p className="text1 typography">{children}</p>;
};

export const Text2: React.FC<TypographyProps> = ({ children }) => {
  return <p className="text2 typography">{children}</p>;
};
