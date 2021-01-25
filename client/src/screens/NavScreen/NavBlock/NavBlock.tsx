import {regionsTree} from "../../../types/region";
import { NavTree } from "./NavTree/NavTree";
import './nav-block.css';

interface IProps {
    tree: regionsTree,
    onElementClick?: any /* Callback */
}

export const NavBlock = ({tree, onElementClick}: IProps) => {
    return (
        <div className={'nav-block'}>
            <ul className={'tree'}>
                {
                    tree && tree.roots && Array.from(tree.roots).map(root => {
                        return <NavTree key={root} tree={tree} vertex={root} onElementClick={onElementClick} path={root.toString()}/>
                    })
                }
            </ul>
        </div>
    )
}