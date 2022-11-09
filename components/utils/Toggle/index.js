import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Image from 'next/image';
import React, { useState, useContext } from 'react';
import LanguageContext from '../../../stores/languageContext';

export default function ToggleButtonNotEmpty({}) {
    const { language, handlelanguage } = useContext(LanguageContext);


    const sx = {
        "&.Mui-selected, &.Mui-selected:hover": {
            color: "white",
            borderBottom: '1px solid #ffffff',
            borderRadius:'0px'
        }
    }

    return (
        <Stack direction="row" spacing={1}>
            <ToggleButtonGroup
                value={language}
                exclusive
                onChange={handlelanguage}
                aria-label="text language"
            >
                <ToggleButton value="swe" aria-label="Swedish" sx={sx}>
                    <Image src="/images/sweden.svg" height={30} width={30} />
                </ToggleButton>
                <ToggleButton value="eng" aria-label="English" sx={sx}>
                    <Image src="/images/britain.svg" height={30} width={30} />
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    );
}
