import React from 'react';
import Image from 'next/image';
import Formulario from '../components/Form/form';

export default function FreeTrial() {
    return (
        <main className='flex items-center bg-gradient-to-b from-slate-50 via-blue-100 to-sky-400 dark:from-transparent  dark:via-slate-600 dark:to-slate-900'>


            <section className='absolute flex flex-col text-secondary items-center justify-center drop-shadow-md'>
                <div className='mb-[20px]'>
                    <img className='w-[100px]' src='/img/logo.png' />
                </div>
                <div className='formContainer flex flex-col items-center justify-center max-w-[50%] bg-[#D9D9D9] p-[20px] rounded-2xl dark:bg-white'>
                    <p className='text-h2 font-bold dark:'>Vamos garantir o teste grátis?</p>

                    < Formulario />
                </div>
            </section>
            <div className=''>       
                <img className='h-[837px] w-screen opacity-100' src='/img/clouds.png' />
            </div>

        </main>
    );
}