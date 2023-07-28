import React, { useEffect, useState } from 'react';
import OuterPageContainer from './tableHelpers/outerContainer';
import GeneralTable from './tables/generalTable';
import { headerLargeCourses, headerSmallCourses } from './tables/headerTitles';
import fetch from 'node-fetch';
import { parse } from 'papaparse';
import styled from 'styled-components';
import { FiDownload } from 'react-icons/fi';

export const RedButton = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: rgba(26,26,26,0.6);
    border: 2px solid #ff4d5a;
    border-radius: 5px;
    color: #f1f1f1;
    font-size: 1.1rem;
    font-weight: 400;
    width: 135px;
    height:42px;
    gap:10px;
    background: linear-gradient(55deg,  #ff4d5a 50%, #ffffff00 50%) right;
    background-size: 300%;
    transition: .6s ease-out;
    margin: auto;

  &:hover {
    cursor: pointer;
    scale: 1.02;
    background-position: left;
  }

    @media screen and (max-width:600px) {
      width: 180px;
      font-size: 1.2rem;
    }
`

const PageTitle = styled.h1`
    position: relative;
    font-size: 3.5rem;
    font-weight: 500;
    z-index: 9999;
    width: 100%;
    margin: 0;

    @media screen and (max-width:800px) {
    font-size: 3rem;
    margin-bottom: 2rem;
    }
    @media screen and (max-width:400px) {
        font-size: 2.5rem;
        margin-bottom: 1.3rem;

    display: none;
    }
`;


const RowWrap = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
    width:100%;
    height: fit-content;
    margin-top: 2rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 1100px) {
    flex-direction:column;
    justify-content:flex-start;
    align-items: flex-start;
    gap:15px;
    }
`;


export default function CoursesSection() {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)

    async function loadData() {
        try {
            const response = await fetch('/data/betyg.csv');
            const text = await response.text();
            let data = parse(text, { header: true }).data;

            // Here's where we reformat the keys
            let reformattedData = data.map(item => {
                let newItem = {};

                Object.keys(item).forEach(key => {
                    if (key.trim() === "Skola") {
                        newItem["Skola"] = item[key];
                    } else {
                        newItem[key] = item[key];
                    }
                });

                return newItem;
            });

            // Filtering out rows with null values
            reformattedData = reformattedData.filter(item => {
                return !Object.values(item).includes('');
            });

            // Now we set the state with the reformatted data
            setCourses(reformattedData);

            setLoading(false);
        } catch (error) {
            console.error("Failed to load CSV data:", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <OuterPageContainer>
            <RowWrap>
                <PageTitle>
                    Completed courses
                </PageTitle>
                <RedButton >
                    <a href="/data/Resume_Jonathan.pdf" target="_blank" style={{ color: 'inherit', textDecoration: 'none' }}>
                        Resume <FiDownload />
                    </a>
                </RedButton>
            </RowWrap>
            <GeneralTable
                data={courses} setData={setCourses} loading={loading} longText={'Kursnamn'}
                headerLarge={headerLargeCourses} headerSmall={headerSmallCourses}
            />
        </OuterPageContainer>
    )
}