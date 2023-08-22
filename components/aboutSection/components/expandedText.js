import React from 'react'
import styled from 'styled-components'
import ReadMore from '../../techSection/components/readMore';

export const TextBox = styled.span`
  color:#d4d4d4;
  margin-bottom: 1.25rem;
  margin-top: 0px;
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 1.65rem;
  white-space: pre-line;
  height: fit-content;
  @media screen and (max-width:800px) {
    font-size: 1rem;
    line-height: 1.4rem;
  }
`;

const ArticleTitle = styled.h2`
  color:#ffffff;
  margin-bottom: 0rem;
  margin-top: 0px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5rem;

  @media screen and (max-width:800px) {
    font-size: 1.5rem;
    line-height: 1rem;
  }
`;


export default function ExpandedText({ fullText, title }) {


  return (
    <>
      <ArticleTitle>
        {title}
      </ArticleTitle>
      <TextBox>
        <ReadMore>
          {fullText}
        </ReadMore>

      </TextBox >
    </>
  )
}

