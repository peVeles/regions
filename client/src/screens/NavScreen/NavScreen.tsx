import { useState, useEffect } from 'react';
import { buildTreeByRegions } from "../../utils/regions.utils";
import { getRegions } from "../../api/regions/regions.api";
import { NavTree } from "./NavTree/NavTree";
import { regionsTree } from "../../types/regions";
import './navScreen.css';


export const NavScreen = () => {
    const [tree, setTree]: [regionsTree, any] = useState(null);
    const [pastClick, setPastClick] = useState({});

    useEffect(() => {
        getRegions().then(res => setTree(buildTreeByRegions(res)));
    }, []);


    return (
        <div className="navScreen">
            <NavTree
                tree={tree}
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