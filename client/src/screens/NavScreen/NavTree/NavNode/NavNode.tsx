import { regionsNode } from "../../../../types/regions";
import { useState, useEffect } from "react";
import './navNode.css';

interface IProps {
    node: regionsNode,
    onElementClick?: any /* Callback */
}

export const TreeNode = ({node, onElementClick}: IProps) => {

    const [active, setActive] = useState(false);
    const [ulClassName, setUlClassName] = useState('');
    const [children, setChildren]: [regionsNode[], any] = useState([]);
    const [spanClassName, setSpanClassName] = useState('');


    useEffect( () => {
        node.children && setChildren(Object.values(node.children));
    }, [node.children])

    useEffect(() => {
        setUlClassName(active ? 'nested active' : 'nested');
    }, [active])

    useEffect(() => {
        setSpanClassName(children.length ? (active ? 'caret caret-down' : 'caret') : '');
    }, [active, children])


    const handleToggle = () => {
        setActive(!active);
        onElementClick({ name: node.name, id: node.id, path: node.path })
    }


    return (
        <li>
            {
                <span
                    className={spanClassName}
                    onClick={handleToggle}
                    >
                    {node.name}
                </span>
            }
            {
                children &&
                <ul className={ulClassName}>
                    {
                        children.map(child => {
                            return <TreeNode node={child} key={node.path + child.id} onElementClick={onElementClick}/>
                        })
                    }
                </ul>
            }
        </li>
    )
}