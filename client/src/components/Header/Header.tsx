import './header.css';

interface IProps {
    headerText: string
}

export const Header = ({headerText}: IProps) => {
    return (
        <div className={'header'}>
            <h3>{headerText}</h3>
        </div>
    )
}
