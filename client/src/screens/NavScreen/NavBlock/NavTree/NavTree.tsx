import { regionsTree } from "../../../../types/region";
import { useState } from "react";
import './navtree.css';

interface IProps {
    tree: regionsTree,
    vertex: number,
    onElementClick?: any /* Callback */
    path: string
}

export const NavTree = ({tree, onElementClick, vertex, path}: IProps) => {

    const [active, setActive] = useState(false);

    return (
        tree && tree.graph && (
            tree.graph[vertex].size > 0 ?
            (<li>
                <span className={ (active ? 'caret-down': '') + ' caret'} onClick={() => {setActive(!active); onElementClick({id: vertex, name: tree.vertexes[vertex], path});}}>{tree.vertexes[vertex]}</span>
                <ul className={(active ? 'active': '') + ' nested'}>
                    {
                        Array.from(tree.graph[vertex]).map(v => {
                            return <NavTree tree={tree} onElementClick={onElementClick} vertex={v} key={path + '.' + v} path={path + '.' + v}/>;
                        })
                    }
                </ul>
            </li>)
                :
            (<li onClick={() => onElementClick({id: vertex, name: tree.vertexes[vertex], path})} style={{cursor: 'pointer'}}>{tree.vertexes[vertex]}</li>))
    );
}