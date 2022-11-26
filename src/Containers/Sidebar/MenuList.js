import React from "react";
import {styled} from '@mui/material/styles';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ListItem from "./ListItem";
import SubMenu from "./SubMenu";

import './MenuList.scss';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowBackIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

function MenuList(props) {
    const [expanded, setExpanded] = React.useState('');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };



    return (
        < >
            {
                props.checked ?
                    <div className="MenuList">
                        <Accordion className='menu'>
                            <AccordionSummary className='titleMenu' expanded={expanded === props.id}
                                              onChange={handleChange(props.id)}
                                              aria-controls="panel1d-content" id="panel1d-header">
                                <Typography className='iconAndText'>
                                    <div>{props.icon}</div>
                                    <span
                                        className= 'textTitle' >{props.title}</span>
                                </Typography>
                            </AccordionSummary>
                            {props.subMenu.length > 0 ? <SubMenu subMenu={props.subMenu}/> : ""}
                            {props.list.length > 0 ? props.list.map(i => <ListItem checked={props.checked} list={i.name} icon={i.icon}/>) : ""}
                        </Accordion>
                    </div>
                    : <div className='iconHiddenMenuList'>{props.icon}</div>
            }
        </>
    );
}

export default MenuList;
