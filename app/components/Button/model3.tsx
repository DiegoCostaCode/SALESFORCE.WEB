import { Props } from "./interface";

const MODEL3 = (props : Props) => {
    return (
      <button className="border-secondary border-2 text-secondary rounded-lg p-button hover:bg-secondary hover:text-white transition-all dark:border-white dark:text-white dark:hover:bg-[#445C89]">
        <a className=" font-bold text-xl ">{props.name}</a>
      </button>
    );
  };
  
  export default MODEL3;