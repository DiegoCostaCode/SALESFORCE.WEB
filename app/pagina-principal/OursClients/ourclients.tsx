import CardClient from "../../components/CardClients/clientCard";

const OursClients = () => {
    
    return (
        <>
            <section className="flex justify-center  mb-[40px] mt-[40px]">
                <div className="w-[90%]">

                    <p className="font-bold text-h1 text-secondary mb-[20px] dark:text-white ">Nossos clientes</p>

                    <div>
                        <div className="w-auto flex space-x-[100px] overflow-x-auto  p-10 shadow-inner rounded-2xl dark:bg-secondary " >
                            <CardClient
                                logo="/img/client-inter.png"
                                businessArea="Setor financeiro."
                                depoiment="“As soluções da Salesforce nos permitiram conhecer melhor os clientes de cada uma de nossas áreas de atuação e adaptar e aprimorar nossos processos para atender plenamente suas necessidades, oferecendo mais valor em nossos serviços e consolidando nossa posição de plataforma de serviços financeiros e não-financeiros em linha com o perfil e jornada do cliente.”"
                                person="DANILO COUTO | GERENTE EXECUTIVO DE CRM DO INTER
                        "
                            />
                            <CardClient
                                logo="/img/client-audi.png"
                                businessArea="Setor automobolistico."
                                depoiment="“A adoção da Salesforce permitiu conectar as áreas da Audi do Brasil através de uma única plataforma digital integrada. Nossa abordagem possibilita ter a visão 360º dos nossos clientes finais, nossos colaboradores e nossos parceiros. Tivemos um aumento significativo de automação dos nossos processos internos, desfazendo silos na nossa operação e deixando a comunicação mais fluida. Com isso, nossos clientes e concessionários se beneficiam de ações mais ágeis, inovadoras e efetivas, promovendo a melhor experiência.”"
                                person="NILS A. RADSAK, HEAD OF DIGITALIZATION, IT & PROCESS MANAGEMENT DA AUDI DO BRASIL"
                            />

                            <CardClient
                                logo="/img/client-ifood.png"
                                businessArea="Setor alimenticio."
                                depoiment="“A satisfação e o engajamento do cliente são as principais medidas para o sucesso da estratégia de marketing. E foi nisso que o iFood investiu.”"
                                person="GABRIEL QUINT, COORDENADOR DE PROJETOS E SISTEMAS DO GRUPO IFOOD"
                            />

                            <CardClient
                                logo="/img/client-bic.png"
                                businessArea="Setor de matérias-primas"
                                depoiment="“A Salesforce nos ajudou suportando a nova cultura e provendo a tecnologia necessária para nos mantermos como uma marca referência.”"
                                person="BRUNO KAYANO, GERENTE DE INTELIGÊNCIA DE VENDAS DA BIC"
                            />


                        </div>

                    </div>
                </div>
            </section>
        </>

    );
};

export default OursClients;