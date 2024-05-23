import { Props } from "./interface-saibamais";

const Saibamais = (props: Props) => {
    return (


        <button className="bg-secondary rounded-lg text-xl text-white font-bold p-button m-[20px] dark:bg-white dark:text-secondary" >
            <a href={props.href}>Saiba mais!</a>
        </ button>


    )
}
export default Saibamais;