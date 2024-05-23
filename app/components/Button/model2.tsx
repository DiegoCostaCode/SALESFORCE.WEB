import { Props } from "./interface";

const MODEL2 = (props : Props) => {
    return (
      <button className="border-secondary rounded-lg p-button">
        <a className="text-secondary font-bold text-xl dark:text-white">{props.name}</a>
      </button>
    );
  };
  
  export default MODEL2;