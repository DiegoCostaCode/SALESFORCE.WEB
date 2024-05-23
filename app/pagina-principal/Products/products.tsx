import Cardservices from "../../components/CardServices/cardservices";

const Products = () => {
    return (
        <>
            <section className="flex justify-center" >

                <div className="bg-gradient-to-br from-yellow-100 via-blue-100 to-sky-400 rounded-3xl w-[100%] dark:bg-dark dark:from-[#0A2647] dark:via-slate-600 dark:to-slate-900">

                    <div className="flex w-full bg-mountain bg-contain bg-right-bottom bg-no-repeat py-[50px]">

                        <div className="flex items-center flex-col w-full">

                            <p className="text-h1 font-bold text-secondary py-[15px] dark:text-white">Nossos serviços mais <span className="underline decoration-2">populares</span></p>

                            <div className="flex overflow-x-auto justify-start rounded-2xl w-[90%]">
                                <Cardservices
                                    logo="/img/marketing-icon.png"
                                    name="Marketing Cloud"
                                    description=
                                    "Evolua suas estratégias de marketing com o product.marketing: potencialize campanhas personalizadas, rastreie o desempenho em tempo real e conquiste clientes de forma eficaz." 
                                    href="./Datacloud/"/>

                                <Cardservices
                                    logo="/img/datacloud-icon.png"
                                    name="Data Cloud"
                                    description=
                                    "Capacite sua equipe com o Marketing Cloud: Conecte dados, insights e ações para um engajamento eficaz em todos os pontos de contato do cliente."
                                    href="./" />

                                <Cardservices
                                    logo="/img/sales-icon.png"
                                    name="Sales Cloud"
                                    description=
                                    "Transforme suas vendas: IA, dados e CRM se unem para impulsionar a eficiência e expandir seus negócios de forma inovadora com o líder de mercado em CRM com IA." 
                                    href="./" />


                                <Cardservices
                                    logo="/img/einstein-icon.png"
                                    name="Einstein GPT"
                                    description=
                                    "Transforme suas operações com a IA do Salesforce Einstein. Personalize experiências preditivas e generativas em todo o Customer 360 para impulsionar vendas, atendimento ao cliente e estratégias de marketing." 
                                    href="./"/>


                            </div>


                        </div>


                    </div>


                </div>
            </section>
        </>

    );
};

export default Products;