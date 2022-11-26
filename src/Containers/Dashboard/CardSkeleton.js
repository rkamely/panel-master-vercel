import React from "react";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import './CardSkeleton.scss';


function CardSkeleton() {


    return (
       <span className='cardSkeletonContainer'>
            <Stack  spacing={1} >
            <div className='headerCardSkeleton'>
                <Skeleton variant="text" width={'70%'} sx={{fontSize: '1rem'}}/>
                <Skeleton variant="circular" width={50} height={50} style={{marginRight: 'auto'}}/>
            </div>
            <Skeleton variant="rounded" height={100}/>
        </Stack>
       </span>
    );
}

export default CardSkeleton;
