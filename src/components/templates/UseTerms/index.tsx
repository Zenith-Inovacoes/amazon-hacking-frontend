/* eslint-disable react/no-unescaped-entities */
import TermsCard from '@/components/molecules/TermsCard'

function StartWave() {
    return (
        <svg
            id='policy-start-wave'
            className='rotate-0 duration-300 scale-y-[1.01]'
            viewBox='0 0 1440 200'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
        >
            <defs>
                <linearGradient
                    id='policy-start-wave-gradient'
                    x1='0'
                    x2='0'
                    y1='1'
                    y2='0'
                >
                    <stop stopColor='rgba(1, 101, 183, 1)' offset='0%'></stop>
                    <stop stopColor='rgba(1, 101, 183, 1)' offset='100%'></stop>
                </linearGradient>
            </defs>
            <path
                className='translate-x-0 translate-y-0 opacity-100'
                fill='url(#policy-start-wave-gradient)'
                d='M0,40L120,63.3C240,87,480,133,720,136.7C960,140,1200,100,1440,80C1680,60,1920,60,2160,63.3C2400,67,2640,73,2880,93.3C3120,113,3360,147,3600,160C3840,173,4080,167,4320,160C4560,153,4800,147,5040,136.7C5280,127,5520,113,5760,96.7C6000,80,6240,60,6480,60C6720,60,6960,80,7200,90C7440,100,7680,100,7920,90C8160,80,8400,60,8640,60C8880,60,9120,80,9360,96.7C9600,113,9840,127,10080,116.7C10320,107,10560,73,10800,53.3C11040,33,11280,27,11520,43.3C11760,60,12000,100,12240,103.3C12480,107,12720,73,12960,53.3C13200,33,13440,27,13680,46.7C13920,67,14160,113,14400,140C14640,167,14880,173,15120,153.3C15360,133,15600,87,15840,63.3C16080,40,16320,40,16560,63.3C16800,87,17040,133,17160,156.7L17280,180L17280,200L17160,200C17040,200,16800,200,16560,200C16320,200,16080,200,15840,200C15600,200,15360,200,15120,200C14880,200,14640,200,14400,200C14160,200,13920,200,13680,200C13440,200,13200,200,12960,200C12720,200,12480,200,12240,200C12000,200,11760,200,11520,200C11280,200,11040,200,10800,200C10560,200,10320,200,10080,200C9840,200,9600,200,9360,200C9120,200,8880,200,8640,200C8400,200,8160,200,7920,200C7680,200,7440,200,7200,200C6960,200,6720,200,6480,200C6240,200,6000,200,5760,200C5520,200,5280,200,5040,200C4800,200,4560,200,4320,200C4080,200,3840,200,3600,200C3360,200,3120,200,2880,200C2640,200,2400,200,2160,200C1920,200,1680,200,1440,200C1200,200,960,200,720,200C480,200,240,200,120,200L0,200Z'
            ></path>
        </svg>
    )
}

function EndWave() {
    return (
        <svg
            id='policy-end-wave'
            className='rotate-180 duration-300 scale-y-[1.01]'
            viewBox='0 0 1440 200'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
        >
            <defs>
                <linearGradient
                    id='policy-end-wave-gradient'
                    x1='0'
                    x2='0'
                    y1='1'
                    y2='0'
                >
                    <stop stopColor='rgba(1, 101, 183, 1)' offset='0%'></stop>
                    <stop stopColor='rgba(1, 101, 183, 1)' offset='100%'></stop>
                </linearGradient>
            </defs>
            <path
                className='translate-x-0 translate-y-0 opacity-100'
                fill='url(#policy-end-wave-gradient)'
                d='M0,140L120,126.7C240,113,480,87,720,90C960,93,1200,127,1440,116.7C1680,107,1920,53,2160,26.7C2400,0,2640,0,2880,13.3C3120,27,3360,53,3600,56.7C3840,60,4080,40,4320,30C4560,20,4800,20,5040,23.3C5280,27,5520,33,5760,36.7C6000,40,6240,40,6480,36.7C6720,33,6960,27,7200,23.3C7440,20,7680,20,7920,43.3C8160,67,8400,113,8640,116.7C8880,120,9120,80,9360,56.7C9600,33,9840,27,10080,36.7C10320,47,10560,73,10800,100C11040,127,11280,153,11520,160C11760,167,12000,153,12240,126.7C12480,100,12720,60,12960,36.7C13200,13,13440,7,13680,13.3C13920,20,14160,40,14400,60C14640,80,14880,100,15120,96.7C15360,93,15600,67,15840,53.3C16080,40,16320,40,16560,50C16800,60,17040,80,17160,90L17280,100L17280,200L17160,200C17040,200,16800,200,16560,200C16320,200,16080,200,15840,200C15600,200,15360,200,15120,200C14880,200,14640,200,14400,200C14160,200,13920,200,13680,200C13440,200,13200,200,12960,200C12720,200,12480,200,12240,200C12000,200,11760,200,11520,200C11280,200,11040,200,10800,200C10560,200,10320,200,10080,200C9840,200,9600,200,9360,200C9120,200,8880,200,8640,200C8400,200,8160,200,7920,200C7680,200,7440,200,7200,200C6960,200,6720,200,6480,200C6240,200,6000,200,5760,200C5520,200,5280,200,5040,200C4800,200,4560,200,4320,200C4080,200,3840,200,3600,200C3360,200,3120,200,2880,200C2640,200,2400,200,2160,200C1920,200,1680,200,1440,200C1200,200,960,200,720,200C480,200,240,200,120,200L0,200Z'
            ></path>
        </svg>
    )
}

export default function PrivacyPolicy() {
    return (
        <section className='pt-32 lg:pt-40'>
            <div className='flex flex-col justify-center max-w-screen-2xl mx-auto items-center gap-6 px-8 md:px-16'>
                <h4 className='text-black font-bold text-40 leading-40 text-center md:text-50 md:leading-44 lg:text-60 lg:leading-62'>
                    Termos de Serviço
                </h4>
                <p className='text-black font-normal text-16 leading-4 text-center md:text-18 lg:text-20 lg:leading-5'>
                    Ao utilizar o serviço de votação aberta no site Computação
                    Amostra, você concorda em cumprir os seguintes termos de
                    serviço:
                </p>
            </div>
            <StartWave />
            <div className='bg-primary-100'>
                <div className='flex flex-col max-w-screen-2xl mx-auto items-center justify-center gap-16 px-8 py-4 md:px-16 lg:gap-20'>
                    <TermsCard title='Uso do Serviço'>
                        O serviço de votação aberta no site Computação Amostra é
                        fornecido para uso pessoal e não comercial. Você
                        concorda em usar o serviço apenas para fins permitidos
                        pela lei e conforme estes termos de serviço.
                    </TermsCard>
                    <TermsCard title='Autenticação via Google OAuth'>
                        O serviço de votação aberta utiliza a autenticação via
                        Google OAuth para obter seu e-mail, foto de perfil e
                        nome. Você concorda em permitir o acesso a essas
                        informações por meio do Google OAuth e reconhece que a
                        coleta, uso e proteção dessas informações estão sujeitas
                        à Política de Privacidade descrita neste site.
                    </TermsCard>
                    <TermsCard title='Consentimento para Coleta de Dados'>
                        Ao utilizar o serviço de votação aberta, você consente
                        com a coleta, uso e proteção das informações pessoais
                        fornecidas por meio da autenticação via Google OAuth, em
                        conformidade com a Lei Geral de Proteção de Dados
                        Pessoais (LGPD) e a Política de Privacidade deste site.
                    </TermsCard>
                    <TermsCard title='Uso Responsável'>
                        Você concorda em usar o serviço de votação aberta de
                        forma responsável e em conformidade com todas as leis
                        aplicáveis. Você NÃO pode usar o serviço para fins
                        ilegais, prejudiciais, ofensivos, discriminatórios,
                        difamatórios ou de outra forma inapropriados.
                    </TermsCard>
                    <TermsCard title='Propriedade Intelectual'>
                        Todos os direitos de propriedade intelectual
                        relacionados ao serviço de votação aberta, incluindo,
                        mas não se limitando a, marcas registradas, direitos
                        autorais e patentes, são de propriedade da Computação
                        Amostra do CESUPA ou de seus respectivos titulares. Você
                        não tem permissão para usar, reproduzir, modificar ou
                        distribuir qualquer conteúdo do serviço sem autorização
                        prévia por escrito.
                    </TermsCard>
                    <TermsCard title='Responsabilidade'>
                        A Computação Amostra do CESUPA não se responsabiliza por
                        qualquer dano, perda, reclamação ou prejuízo decorrente
                        do uso do serviço de votação aberta, incluindo, mas não
                        se limitando a, falhas técnicas, interrupções, erros ou
                        missões.
                    </TermsCard>
                    <TermsCard title='Modificações dos Termos de Serviço:'>
                        A Computação Amostra do CESUPA reserva-se o direito de
                        modificar estes termos de serviço a qualquer momento,
                        mediante aviso prévio aos usuários. O uso continuado do
                        serviço após a modificação dos termos de serviço
                        constitui aceitação dessas modificações.
                    </TermsCard>
                    <TermsCard
                        title='Encerramento do Serviço'
                        className='min-w-full'
                    >
                        A Computação Amostra do CESUPA reserva-se o direito de
                        encerrar o serviço de votação aberta a qualquer momento,
                        sem aviso prévio.
                    </TermsCard>
                    <TermsCard title='Jurisdição e Lei Aplicável'>
                        Estes termos de serviço serão regidos e interpretados de
                        acordo com as leis do Brasil, e qualquer disputa
                        relacionada a estes termos de serviço será submetida à
                        jurisdição exclusiva dos tribunais do Brasil.
                    </TermsCard>
                    <p className='text-white font-normal text-16 leading-4 text-center md:text-18 lg:text-20 lg:leading-5'>
                        Ao utilizar o serviço de votação aberta no site
                        Computação Amostra do CESUPA, você concorda em cumprir
                        estes termos de serviço. Caso não concorde com estes
                        termos, por favor, não utilize o serviço.
                    </p>
                </div>
            </div>
            <EndWave />
        </section>
    )
}
