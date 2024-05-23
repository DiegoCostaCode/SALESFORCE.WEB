import { Props } from "./interface"

export default function CardIntegrantes(props : Props) {
    return (
        <div className="flex flex-col items-center p-[20px] rounded-xl h-[300px]">
                <img className="w-[200px] rounded-xl " src={props.img} />
                <p className="text-xl text-secondary font-bold p-[10px] dark:text-white">{props.nome}</p>
            </div>
    );
}


