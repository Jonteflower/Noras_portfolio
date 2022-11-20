import React from "react";
import styled from "styled-components";
import { useState } from 'react'

const InlineText = styled.p`
  display: inline;
  width: 100%;
`

const ReadOrHide = styled.span`
  color: #ffffff;
  cursor: pointer;
`

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };


    const ShowReadMore = () => {
        if (text?.length > 100) {
            return (
                < InlineText >
                    {isReadMore ? text?.slice(0, 150) : text}
                    < ReadOrHide onClick={toggleReadMore}>
                        {isReadMore ? " ...read more" : " show less"}
                    </ ReadOrHide>
                </InlineText >
            )
        }
        else {
            return children
        }
    }

    return (
        ShowReadMore()
    );
};

export default ReadMore