//import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
//import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import React, { useState } from 'react';
import styled from 'styled-components';
import { sortByBools, sortByString } from './sortFunctions';

const TitleText = styled.a`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1.4rem;
    line-height:1.6rem;
    font-weight: 400;
    text-align: ${props => props.aligned};
    color: #F1F1F1;
    flex: ${props => props.flex};
    min-width: 70px;
    //font-family: 'Poppins', sans-serif;

    @media screen and (max-width:1300px) {
        font-size: 1.2rem;
        line-height: 1.4rem;
        min-width: 70px;
    }

    &:hover {
      cursor: pointer;
    }
`;

const IconWrap = styled.div`
  display: flex;
  flex-direction:row;
  align-items: center;
  gap:5px;
  justify-content: ${props => props.justify};
  flex: ${props => props.flex};
  transition: all .4s;
`;


function TableTitles({ language, itemArray, setItemArray, keyArray, textAlign, showIcons }) {
    const initialObject = {}
    const [current, setCurrent] = useState({})
    const [sorted, setSorted] = useState({})
    const [ascending, setAscending] = useState(initialObject)
    const [descending, setDescending] = useState(initialObject)

    
    keyArray.map((obj) => {
        return Object.assign(initialObject, { [obj.name]: false })
    })

    function handleSorting(item) {
        setCurrent(item)
        const type = item.name
        const sortingType = item.type

        //Sort initially by ascending
        if (sorted[type] == false) {
            setSorted({ ...sorted, [type]: !sorted[type] })
            setAscending({ ...ascending, [type]: true })
            setDescending({ ...descending, [type]: false })

            //Check what type the object is then sort by asc and update array
            if (sortingType == 'string') {
                let newArray = sortByString(itemArray, type, 'asc')
                setItemArray([...newArray])
            } else if (sortingType == 'bool' || sortingType == 'number') {
                let newArray = sortByBools(itemArray, type, 'asc')
                setItemArray([...newArray])
            }

        } else {
            //If already sorted by ascending sort by dsc instead
            if (ascending[type] == true) {
                setAscending({ ...ascending, [type]: false })
                setDescending({ ...descending, [type]: true })

                //Check what type the object is then sort by asc and update array
                if (sortingType == 'string') {
                    let newArray = sortByString(itemArray, type, 'dsc')
                    setItemArray([...newArray])
                } else if (sortingType == 'bool' || sortingType == 'number') {
                    let newArray = sortByBools(itemArray, type, 'dsc')
                    setItemArray([...newArray])
                }

            }
            //Else if already sorted by descending sort by ascending 
            else {
                setAscending({ ...ascending, [type]: true })
                setDescending({ ...descending, [type]: false })

                //Check what type the object is then sort by asc and update array
                if (sortingType == 'string') {
                    let newArray = sortByString(itemArray, type, 'asc')
                    setItemArray([...newArray])
                } else {
                    let newArray = sortByBools(itemArray, type, 'asc')
                    setItemArray([...newArray])
                }


            }
        }
    }

    /*
    const IsSortedComponent = (type) => {
        if (sorted[type] && ascending[type]) {
            return <ArrowUpwardIcon sx={{ width: 25, fontSize: 18, color: '#ffffff99' }} />
        } else if (sorted[type] && descending[type]) {
            return <ArrowDownwardIcon sx={{ width: 25, fontSize: 18, color: '#ffffff99' }} />
        } else {
            return null
        }
    }
    */

    return (
        <>
            {keyArray.map((item, index) => {
                const isSortable = itemArray?.length < 700;
                const handleClick = isSortable ? () => handleSorting(keyArray[index]) : null;

                return (
                    <IconWrap flex={keyArray[index].flex} justify={'center'} key={item.name}>
                        <TitleText onClick={handleClick} aligned={textAlign ? textAlign : 'center'}>
                            {language == 'swe' ? keyArray[index].swe : keyArray[index].eng}

                        </TitleText>
                    </IconWrap>
                );
            })}
        </>
    );



}


export default TableTitles
