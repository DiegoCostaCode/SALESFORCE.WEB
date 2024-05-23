'use client'
import { useEffect, useState } from 'react'
import { enviarTesteGratis, pegarInformacoesObjeto } from './funcoes'
import { backEndInfoProps } from './interface'
import "./style.css"


//Componente responsável pelo formulário da página de teste grátis.
const Formulario = () => {

    return (


        <form className='flex flex-col items-center p-[15px]'>

            <section className='flex flex-wrap justify-start'>

                <div className='flex flex-col w-[400px] mx-[15px]'>
                    <label htmlFor="name">Nome:</label>
                    <input className='text dark:bg-white dark:border-2 dark:border-secondary' type="text" name="name" id="name" placeholder="Nome" required />
                </div>

                <div className='flex flex-col w-[400px] mx-[15px]'>
                    <label htmlFor="cargo">Cargo:</label>
                    <input className='text dark:bg-white dark:border-2 dark:border-secondary' type="text" name="cargo" id="cargo" placeholder="Cargo" required />
                </div>

                <div className='flex flex-col w-[400px] mx-[15px]'>
                    <label htmlFor="email corporativo">Email corporativo:</label>

                    <input className='text dark:bg-white dark:border-2 dark:border-secondary' type="email" name="email corporativo" id="email corporativo" placeholder="seuemail@email.com" required />
                </div>

                <div className='flex flex-col w-[400px] mx-[15px]'>
                    <label htmlFor="telefone">Telefone:</label>
                    <input className='text dark:bg-white dark:border-2 dark:border-secondary' type="tel" name="telefone" id="telefone" placeholder="Telefone" required />
                </div>

                <div className='flex flex-col w-[400px] mx-[15px]'>
                    <label htmlFor="tamanho da empresa">Tamanho da empresa:</label>
                    <select className='dark:bg-white dark:border-2 dark:border-secondary' name="tamanho da empresa" id="tamanho da empresa" required>
                        <option className='text-slate-300' value="" disabled selected>Tamanho da empresa</option>
                        <option value="1">1-50 funcionários</option>
                        <option value="2">51-300 funcionários</option>
                        <option value="3">301-1000 funcionários</option>
                        <option value="4">1001-2000 funcionários</option>
                        <option value="5">2000+ funcionários</option>
                    </select>
                </ div>


                <div className='flex flex-col w-[400px] mx-[15px]'>
                    <label htmlFor="pais/regiao">País/Região:</label>
                    <select className='dark:bg-white dark:border-2 dark:border-secondary' name="pais/regiao" id="pais/regiao" required>
                        <option className='text-slate-300' value="" disabled selected>Selecione o País/Região</option>
                        <option value="1">Estados Unidos</option>
                        <option value="2">Canadá</option>
                        <option value="3">Brasil</option>
                        <option value="4">Reino Unido</option>
                        <option value="5">França</option>
                        <option value="6">Alemanha</option>
                        <option value="7">Japão</option>
                        <option value="8">Austrália</option>
                        <option value="9">Índia</option>
                    </select>
                </div>

                <div className='flex items-center '>
                    <input className='default:ring-2 valid:border-green-500 required:border-red-500' type="checkbox" name="aceita termos" id="aceita termos" required />
                    <label htmlFor='aceita termos'>Estou de acordo com o
                        <a
                            href="https://www.salesforce.com/content/dam/web/en_us/www/documents/legal/salesforce_MSA.pdf"
                            target="_blank"> Main Services Agreement
                        </a>
                    </label>
                </div>

            </section>



            <input className='enviarFormulario bg-secondary text-xl text-white font-bold w-[400px]' type="button" value="Iniciar Teste gratuito">
            </input>
        </form>

    )
}

export default Formulario;