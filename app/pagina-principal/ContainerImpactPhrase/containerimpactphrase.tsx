const ContainerImpactPhrase = () => {
    return (
        <>
            <section className="flex flex-col justify-center w-full min-h-[300px] rounded-2xl media-1200:mt-[30px]">
                <div className="flex flex-col items-center justify-center ">

                    <div className="flex flex-col text-center items-center absolute media-1200:relative">
                        <p className="text-h1 font-bold text-secondary max-w-[400px] mb-[15px] leading-base dark:text-white">Reunir pessoas é <span className="text-primary uppercase">Salesforce</span></p>
                        <p className="text-base text-secondary drop-shadow-2xl-white dark:text-white dark:drop-shadow-lg-white">Nosso objetivo é alcançar seu cliente indepente do cenário, e torná-los fiéis à sua empresa.
                            <br />O mundo com certeza vai mudar, novas tecnologias surgiram, e estaremos aqui,<br /><span className="underline decoration-2"> adaptados, com foco ao cliente</span></p>
                    </div>

                    <div>
                        <img className="w-full" src="/img/garden-bg2.png" />
                    </div>

                </div>

            </section>
        </>

    );
};

export default ContainerImpactPhrase;