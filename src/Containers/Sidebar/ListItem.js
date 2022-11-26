import React, {useEffect} from "react";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import {Link} from "react-router-dom";

import './ListItem.scss';


const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

function ListItem(props) {
    return (
        <>
            {
                props.checked ?
                    <div className="listItems">
                        <div className="iconList" style={{
                            color: `${(window.location.pathname === props.link) ? '#F89A26' : ''}`
                        }}>{props.icon}</div>
                        <AccordionDetails className='subMenu'>
                            <Typography className='menuItem'>
                                <Link to={props.link} className='textTitle' style={{
                                    color: `${(window.location.pathname === props.link) ? '#F89A26' : ''}`
                                }}> {props.list}</Link>
                            </Typography>
                        </AccordionDetails>
                    </div>
                    : <Link to={props.link} className="iconHiddenSide" style={{
                        color: `${(window.location.pathname === props.link) ? '#F89A26' : ''}`
                    }}>{props.icon}</Link>
            }

        </>
    );
}

export default ListItem;
