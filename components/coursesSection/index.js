import { createTheme } from '@mui/material/styles';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import PageWithTabs from '../reusable/pageWithTabs';
import { db } from '../utils/firebase/firebase';
import { RedButton } from '../utils/reuseable/buttons';
import WarehouseComponent from './components/wareHousePlot';
import GeneralTable from './tables/generalTable';
import { headerLargeBrister, headerLargeSwap, headerSmallBrister, headerSmallSwap } from './tables/headerTitles';
import TableRowBrist from './tables/tableRowBrist';
import TableRowSwap from './tables/tableRowSwap';
import axios from 'axios';
import { getCoordinatesForSpot } from './components/helpers';
import moment from 'moment';
import { headerLargeGhostSpots } from './tables/headerTitles';
import OuterPageContainer from './tableComponents/outerContainer';

export default function WarehousePage() {
    const [bristSpots, setBristSpots] = useState([])
    const [swapSpots, setSwapSpots] = useState([])
    const [loading, setLoading] = useState(true)
    const [ghostSpots, setGhostSpots] = useState([]);
    const [spotCountMap, setSpotCountMap] = useState({});
    const [loadCsv, setLoadCsv] = useState(false);
    const [plotData, setPlotData] = useState([])

    async function getSpots() {
        setLoading(true)
        try {
            const docRef = doc(db, "clients", 'speed', 'warehouse', 'importantSpots');
            const snap = await getDoc(docRef)
            const data = snap.data()
            const formattedSpotsData = data.spotsWithBrister
            const pairsToSwap = data.pairsToSwap

            setBristSpots(formattedSpotsData)
            setSwapSpots(pairsToSwap)
        } catch (error) {
            console.error('Failed to fetch spots:', error)
        } finally {
            setLoading(false)
        }
    }

    async function loadData() {
        setLoading(true);
        await getSpots();
        setLoadCsv(true);
        const newSpots = await getFormmatedWarehouse();

        // Here we handle the newSpots and set the other states
        const countMap = {};
        newSpots.forEach(spot => {
            countMap[spot.aisle] = (countMap[spot.aisle] || 0) + 1;
        });
        setSpotCountMap(countMap);

        const plotData = newSpots.map(spot => {
            return {
                x: [spot.xCord],
                y: [spot.yCord],
                mode: 'markers',
                marker: {
                    symbol: 'line-ew-open',
                    size: 15 * 40 / spotCountMap[spot.aisle],
                    color: '#f1f1f1',
                },
                text: [spot.title],
                hoverinfo: 'text+x+y',
            }
        });

        setPlotData(plotData);
        setLoadCsv(false);
        setLoading(false);
    }


    useEffect(() => {
        loadData();
    }, []);




    return (
        <OuterPageContainer>
            <GeneralTable
                key="brist"
                data={bristSpots} setData={setBristSpots} loading={loading}
                TableRow={TableRowBrist} headerLarge={headerLargeBrister} headerSmall={headerSmallBrister}
            />
        </OuterPageContainer>
    )
}

// newAlgoFunc