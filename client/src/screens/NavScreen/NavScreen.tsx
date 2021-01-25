import React, { useState, useEffect } from 'react';
import { NavBlock } from "./NavBlock/NavBlock";
import { buildGraphByRegions } from "../../utils/regions.utils";
import { regionsTree } from "../../types/region";
import {getRegions} from "../../api/regions/regions.api";
import './navScreen.css';


export const NavScreen = () => {
    const [tree, setTree]: [regionsTree, any] = useState(null);
    const [pastClick, setPastClick] = useState({});

    useEffect(() => {
        getRegions().then(res => setTree(buildGraphByRegions(res)));
    }, []);

    return (
        <div className="navScreen">
            <NavBlock tree={tree}
                      onElementClick={(obj: any) => setPastClick(obj)}
            />
            <div className={'navScreenInfo'}>
                <div>
                    <h3>Past click on:</h3>
                    <p>{JSON.stringify(pastClick, null, '\t')}</p>
                </div>
            </div>
        </div>
    );
}