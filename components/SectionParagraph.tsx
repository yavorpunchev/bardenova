import React from 'react';

type SectionParagraphProps = {
  title: string;
  children: React.ReactNode;
};

export default function SectionParagraph({
  title,
  children,
}: SectionParagraphProps): React.ReactElement {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
}
