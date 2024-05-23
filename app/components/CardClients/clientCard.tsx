import { Props } from "./interface";

const CardClient = (props : Props) => {
    return (
        <>
            <div className="min-w-[500px] border-2 rounded-lg shadow-2xl bg-white  ">

                <a role="button" className="flex flex-col justify-center py-[20px] px-[30px]">

                    <div className="grid grid-cols-1 divide-y">

                    <div className="flex items-end pb-[15px] min-h-[100px] media-1200:flex-col media-1200:items-start">
                        <img className="w-[150px] " src={props.logo} />
                        <p className="uppercase font-bold text-sm text-secondary">{props.businessArea}</p>
                    </div>

                    <div className="h-[350px] min-w-[500px] media-1200:text-clip">
                        <p className="text-base text-secondary max-w-[400px] text-justify ">
                            {props.depoiment}
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-secondary py-[15px]">-{props.person}</p>
                    </div>
                    </div> 
                </a>

            </div>
        </>

    );
};

export default CardClient;