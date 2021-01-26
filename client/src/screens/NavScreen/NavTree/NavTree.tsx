import {regionsTree} from "../../../types/regions";
import { TreeNode } from "./NavNode/NavNode";
import './navTree.css';

interface IProps {
    tree: regionsTree,
    onElementClick?: any /* Callback */
}

export const NavTree = ({ tree, onElementClick }: IProps) => {

    return (
        <div className={'nav-tree'}>
            <ul className={'tree'}>
                {
                    /* Root nodes */
                    tree && Object.values(tree.children).map(node => {
                        return <TreeNode node={node} onElementClick={onElementClick} key={node.id}/>
                    })
                }
            </ul>
        </div>
    )
}