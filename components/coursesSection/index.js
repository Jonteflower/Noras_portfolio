import React, { useEffect, useState } from 'react';
import OuterPageContainer from './tableHelpers/outerContainer';
import GeneralTable from './tables/generalTable';
import { headerLargeCourses, headerSmallCourses } from './tables/headerTitles';
import fetch from 'node-fetch';
import { parse } from 'papaparse';
import styled from 'styled-components';
import { FiDownload } from 'react-icons/fi';
import Image from 'next/image';

const PageTitle = styled.h1`
    white-space: nowrap;
    position: relative;
    font-size: 3.5rem;
    font-weight: 400;
    z-index: 9999;
    margin: 0;

    @media screen and (max-width:800px) {
        font-size: 3rem;
        text-align: center;
        white-space: normal;
        text-align: left;
    }

    @media screen and (max-width:600px) {
        font-size: 2.5rem;
    }

    @media screen and (max-width:400px) {
        font-size: 2rem;
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

    @media screen and (max-width: 700px) {
        align-items: flex-end;
    }

`;

const AlignmentBlock = styled.div`
    width:100%;
`;

const ImageWrap = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items: center;
    width:100%;
    margin-top: 2rem;
    height: fit-content;

    @media screen and (max-width: 1100px) {
        //flex-direction:row-reverse;
        justify-content: space-between;
        transition: all 3s ease-in-out;
        align-items: flex-end;
        margin-top: 0.5rem;
        min-height: 42px;        
    }

    @media screen and (max-width: 700px) {
        justify-content: center;    
        margin:0;

    }
`;

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
    min-width: 135px;
    height:42px;
    gap:10px;
    background: linear-gradient(55deg,  #ff4d5a 50%, #ffffff00 50%) right;
    background-size: 300%;
    transition: .6s ease-out;
    margin-top: auto;
    margin-bottom: auto;

    &:hover {
        cursor: pointer;
        scale: 1.02;
        background-position: left;
    }

    @media screen and (max-width:600px) {
        min-width: 120px;
        font-size: 1rem;
    }
`
const ImageView = styled.div`
    position: relative;
    margin-left: 80px;
    margin-bottom: -15px;
    opacity: ${props => props.isVisible ? 1 : 0}; 
    transition: opacity 2s ease-out, visibility 2s ease-out;
    visibility: ${props => props.isVisible ? 'visible' : 'hidden'}; 
    width: 200px; 
    height: 100px;

    @media screen and (max-width: 900px) {
        margin-bottom: -20px;
        display: none;
        width: 0;
        height: 0;
    }
`;

export default function CoursesSection() {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);

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
                <ImageWrap>
                        <ImageView isVisible={isVisible}>
                            <Image
                                src={'/images/general/Sort_logo.webp'}
                                fill
                                style={{ objectFit: "contain" }}
                                alt='Image showing how to sort table'
                            />
                        </ImageView>
                        <AlignmentBlock/>
                    <RedButton>
                        <a href="/data/Resume_Jonathan.pdf" target="_blank" style={{ color: 'inherit', textDecoration: 'none' }}>
                            Resume <FiDownload />
                        </a>
                    </RedButton>
                </ImageWrap>
            </RowWrap>
            <GeneralTable
                data={courses} setData={setCourses} loading={loading} longText={'Kursnamn'}
                headerLarge={headerLargeCourses} headerSmall={headerSmallCourses}
            />
        </OuterPageContainer>
    );
}