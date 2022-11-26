import React from "react";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import './SubMenu.scss';


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
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
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

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


function SubMenu(props) {
    const [expanded, setExpanded] = React.useState('');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <div>
            {
                props.subMenu.length > 0 ? props.subMenu.map(i => <AccordionDetails className='subMenu'>
                    <Accordion className='menu' expanded={expanded === i.id}
                               onChange={handleChange(i.id)}>
                        <AccordionSummary className='titleMenu'>
                            <Typography>
                                <span className='textTitle'>{i.name}</span>
                            </Typography>
                        </AccordionSummary>
                        {i.subMenuItems.map(i => <AccordionDetails className='subMenu'>
                            <Typography className='menuItem'>
                                <a href="" className='textTitle'>{i}</a>
                            </Typography>
                        </AccordionDetails>)}
                    </Accordion>
                </AccordionDetails>) : ""
            }
        </div>
    );
}

export default SubMenu;
