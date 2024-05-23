"use client";

import MODEL1 from "../../components/Button/testegratis";
import MODEL3 from "../../components/Button/model3";

const SalesforceStarter = () => {
  return (
    <>
      <section className="forced-color-adjust-auto flex flex-row items-center justify-center  overflow-auto mb-[50px] media-1200:flex-col-reverse">

        <div className="flex flex-col media-1200:items-center">
          <div className="max-w-[600px] ml-[50px]">
            <div className="flex items-end media-1200:text-center">
              <p className="text-h1 font-bold text-secondary leading-base dark:text-white">
                Experimente o Salesforce Starter Suite gratuitamente.
              </p>
              
            </div>
            <p className="font-base text-justify font-normal text-secondary pt-[25px] dark:text-white media-1200:text-center">
              Reúna marketing, vendas e atendimento em um único aplicativo.
              Experimente o Salesforce Starter Suite hoje mesmo. Não há nada
              para instalar. Não é necessário cartão de crédito.
            </p>
          </div>
          <div className="flex ml-[50px] mt-[20px] space-x-[10px] media-1200:flex-col media-1200:w-[200px] media-1200:ml-0 media-1200:space-x-[0px] media-1200:space-y-[20px] media-1200:">
            <MODEL1 name="Teste grátis" color="#3A8B54" href="./Login/"/>
            <MODEL3 name="Saiba mais" />
          </div>
        </div>

        <div>
          <img className="max-w-[600px] media-1200:max-w-[450px]" src="/img/cover.png" />
        </div>
      </section>
    </>
  );
};

export default SalesforceStarter;
