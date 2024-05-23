
import ContainerImpactPhrase from "./pagina-principal/ContainerImpactPhrase/containerimpactphrase"
import SalesforceStarter from "./pagina-principal/Salesforcestarter/salesforcestarter"
import OursClients from "./pagina-principal/OursClients/ourclients";
import Products from "./pagina-principal/Products/products";
import Chatbot from "./components/Chatbot/index";


export default function Home() {
  return (
    <>
      <main >
        <SalesforceStarter/>
        <ContainerImpactPhrase />
        <OursClients />
        <Products />
        <Chatbot />
      </main>
    </>
  );
}
