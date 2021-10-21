import React from 'react';
import './style.scss';

type TypographyProps =
  | React.HTMLAttributes<HTMLHeadingElement>
  | React.HTMLAttributes<HTMLParagraphElement>;

export const Header1 = (props: TypographyProps) => {
  const { children, ...otherProps } = props;

  return (
    <h1 className="header1 typography" {...otherProps}>
      {children}
    </h1>
  );
};

export const Header2 = (props: TypographyProps) => {
  const { children, ...otherProps } = props;

  return (
    <h2 className="header2 typography" {...otherProps}>
      {children}
    </h2>
  );
};

export const Header3 = (props: TypographyProps) => {
  const { children, ...otherProps } = props;

  return (
    <h3 className="header3 typography" {...otherProps}>
      {children}
    </h3>
  );
};

export const Header4 = (props: TypographyProps) => {
  const { children, ...otherProps } = props;

  return (
    <h4 className="header4 typography" {...otherProps}>
      {children}
    </h4>
  );
};

export const Text1 = (props: TypographyProps) => {
  const { children, ...otherProps } = props;

  return (
    <p className="text1 typography" {...otherProps}>
      {children}
    </p>
  );
};

export const Text2 = (props: TypographyProps) => {
  const { children, ...otherProps } = props;

  return (
    <p className="text2 typography" {...otherProps}>
      {children}
    </p>
  );
};
