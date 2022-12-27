import React, { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { useInterval } from 'react-use'
import { useContext } from "react"
import LanguageContext from "../../../stores/languageContext"

const animation = keyframes`
  0% { opacity: 0; transform: translateY(50px); }
  25% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1; transform: translateY(0px); }
  100% { opacity: 0; transform: translateY(-50px); }
`

const Wrapper = styled.span`
  display: inline-block;
  opacity: 0;
  animation-name: ${animation};
  animation-duration: 4s;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  color: #ff4d5a;
  font-size: inherit;
  padding-left: 10px;
  width: auto;
  white-space: nowrap; 
  text-align: left;

`


export default function TextChanger({play}) {
  const [count, setCount] = useState(0);
  const items = ['Founder', 'Developer', 'Learner'];
  const [item, setItem] = useState(items[0]);

  useInterval(
    () => {
      const newCount = count + 1

      if (newCount == 3) {
        setCount(0)
        setItem(items[0])
      } else {
        setCount(newCount)
        setItem(items[newCount])
      }

    },
    play ? 4000 : null
  )

  return <Wrapper>{items[count]}</Wrapper>
}


