import MODEL1 from "../../components/Button/testegratis";
import MODEL3 from "../../components/Button/model3";
import { Props } from "./interface";

const Entrypages = (props: Props) => {
  return (
    <>
      <section className="flex flex-row items-center justify-center  overflow-auto mb-[50px]">
        <div className="flex flex-col ">
          <div className="max-w-[600px] ml-[50px]">
            <div className="flex  items-center">
              <img className="w-[80px]" src="/img/datacloud-icon.png" />
              <p className="text-h1 font-bold text-secondary leading-base dark:text-white">
                {props.tittle}
              </p>
            </div>

            <p className="font-base text-justify font-normal text-secondary pt-[25px] dark:text-white">
              {props.description}
            </p>
          </div>
          <div className="flex ml-[50px] mt-[20px] space-x-[10px]">
            <MODEL1 href="./LOGIN/" name="Teste grátis" color={props.color} />
            <MODEL3 name="Saiba mais" />
          </div>
        </div>

        <div>
          <img className="max-w-[600px]" src={props.img} />
        </div>
      </section>
    </>
  );
};

export default Entrypages;
