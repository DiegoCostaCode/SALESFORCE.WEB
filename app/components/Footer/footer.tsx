
const Footer = () => {

    return (
        <footer className="flex flex-col items-center justify-center bg-secondary min-h-[300px]">
            <div className="flex flex-col items-center justify-center p-[20px] space-y-[10px]">
                <img className="w-[100px]" src="/img/logo-no-text.png" />
                <p className="text-xl font-bold">Sempre comprometidos com o cliente e empresas parceiras.</p>
            </div>
            <div className="flex space-x-[10px]">
                <li><a href="./Login/">Teste grátis</a></li>
                <li><a href="https://www.salesforce.com/br/data/">DataCloud</a></li>
                <li><a href="https://www.salesforce.com/br/sales/">SalesCloud</a></li>
                <li><a href="https://www.salesforce.com/br/marketing/" >MarketingCloud</a></li>
                <li><a href="https://www.salesforce.com/br/artificial-intelligence/">EinsteinGPT</a></li>
                <li><a href="./Integrantes/">Integrantes</a></li>
            </div>
        </footer>
    );
};

export default Footer;