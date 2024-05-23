import CardIntegrantes from "./card";


export default function Integrantes() {
    return (
        <main className='flex flex-col justify-center items-center h-screen'>

            <p className="text-h1 text-secondary font-bold dark:text-white">Integrantes</p>

            <div className="flex space-x-[20px]">
            <CardIntegrantes img="/img/diego.jfif" nome="Diego Costa - RM552648"/>
            <CardIntegrantes img="/img/marcelo.png" nome="Marcelo Galli - RM553654"/>
            <CardIntegrantes img="/img/lucas.jpg" nome="Lucas Minozzo - RM553745"/>
            </div>
        </main>
    );
}