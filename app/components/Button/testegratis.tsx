import { Props } from "./testegratis-interface";


const MODEL1 = (props : Props) => {
    return (
      <button className=" rounded-lg p-button dark:hover:outline" style={{backgroundColor:props.color}}>
        <a className="text-white font-bold  text-xl " href={props.href}>{props.name}</a>
      </button>
    );
  };
  
  export default MODEL1;