import { ButtonKey } from '../Atoms/ButtonKey';
import './ButtonKeyGroup.css';

export const ButtonKeyGroup = (props) => {
    return(
     <div className="button-container">
        <ButtonKey value={7}        handleClick={props.handleClick} />
        <ButtonKey value={8}        handleClick={props.handleClick}/>
        <ButtonKey value={9}        handleClick={props.handleClick}/>
        <ButtonKey value={4}        handleClick={props.handleClick}/>
        <ButtonKey value={5}        handleClick={props.handleClick}/>
        <ButtonKey value={6}        handleClick={props.handleClick}/>
        <ButtonKey value={1}        handleClick={props.handleClick}/>
        <ButtonKey value={2}        handleClick={props.handleClick}/>
        <ButtonKey value={3}        handleClick={props.handleClick}/>
        <ButtonKey value={'\xB1'}    handleClick={props.handleClick}/>
        <ButtonKey value={0}        handleClick={props.handleClick}/>
        <ButtonKey value={'.'}      handleClick={props.handleClick}/>
     </div>
    )
}