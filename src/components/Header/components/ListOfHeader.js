import React from 'react';
import "../../../styles.css"
import {Link} from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function DenseAppBar() {
    return (
            <ul className={"navigationList"}>
                <li>Why HypeAuditor?<KeyboardArrowDownIcon className={"arrowDownIcon"}/></li>
                <li>
                    <Link to={"/pricing"}>
                        Pricing
                    </Link>
                </li>
                <li>Resources<KeyboardArrowDownIcon className={"arrowDownIcon"}/></li>
                <li>About<KeyboardArrowDownIcon className={"arrowDownIcon"}/></li>
            </ul>
    );
};
