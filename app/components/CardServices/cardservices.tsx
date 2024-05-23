import Saibamais from "../Button/saibamais";
import { Props } from "./interface";

const Cardservices = (props : Props) => {
    return (
        <>

            <div className="flex  flex-col min-w-[450px] h-auto p-[30px] justify-center items-start border-2 backdrop-blur-md border-secondary rounded-lg m-[30px] dark:border-white">

                <div >
                    <img className="w-[80px]" src={props.logo}/>
                </div>
                <div className="">
                    <p className="text-2xl font-bold text-secondary dark:text-white">
                        {props.name}
                    </p>
                </div>
                <div >
                    <p className="text-base font-normal text-justify text-secondary max-w-[350px] dark:text-white">
                        {props.description}</p>
                </div>
                <div className="">
                    <Saibamais href={props.href}/>
                </div>

            </div>
        </>
    )
}
export default Cardservices;














