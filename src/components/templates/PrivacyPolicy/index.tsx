/* eslint-disable react/no-unescaped-entities */
import TermsCard from "@/components/molecules/TermsCard"

function StartWave() {
    return (
        <svg id="policy-start-wave" className="rotate-0 duration-300 scale-y-[1.01]" viewBox="0 0 1440 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="policy-start-wave-gradient" x1="0" x2="0" y1="1" y2="0">
                    <stop stopColor="rgba(1, 101, 183, 1)" offset="0%"></stop>
                    <stop stopColor="rgba(1, 101, 183, 1)" offset="100%"></stop>
                </linearGradient>
            </defs>
            <path className="translate-x-0 translate-y-0 opacity-100" fill="url(#policy-start-wave-gradient)" d="M0,40L120,63.3C240,87,480,133,720,136.7C960,140,1200,100,1440,80C1680,60,1920,60,2160,63.3C2400,67,2640,73,2880,93.3C3120,113,3360,147,3600,160C3840,173,4080,167,4320,160C4560,153,4800,147,5040,136.7C5280,127,5520,113,5760,96.7C6000,80,6240,60,6480,60C6720,60,6960,80,7200,90C7440,100,7680,100,7920,90C8160,80,8400,60,8640,60C8880,60,9120,80,9360,96.7C9600,113,9840,127,10080,116.7C10320,107,10560,73,10800,53.3C11040,33,11280,27,11520,43.3C11760,60,12000,100,12240,103.3C12480,107,12720,73,12960,53.3C13200,33,13440,27,13680,46.7C13920,67,14160,113,14400,140C14640,167,14880,173,15120,153.3C15360,133,15600,87,15840,63.3C16080,40,16320,40,16560,63.3C16800,87,17040,133,17160,156.7L17280,180L17280,200L17160,200C17040,200,16800,200,16560,200C16320,200,16080,200,15840,200C15600,200,15360,200,15120,200C14880,200,14640,200,14400,200C14160,200,13920,200,13680,200C13440,200,13200,200,12960,200C12720,200,12480,200,12240,200C12000,200,11760,200,11520,200C11280,200,11040,200,10800,200C10560,200,10320,200,10080,200C9840,200,9600,200,9360,200C9120,200,8880,200,8640,200C8400,200,8160,200,7920,200C7680,200,7440,200,7200,200C6960,200,6720,200,6480,200C6240,200,6000,200,5760,200C5520,200,5280,200,5040,200C4800,200,4560,200,4320,200C4080,200,3840,200,3600,200C3360,200,3120,200,2880,200C2640,200,2400,200,2160,200C1920,200,1680,200,1440,200C1200,200,960,200,720,200C480,200,240,200,120,200L0,200Z"></path>
        </svg>
    )
}

function EndWave() {
    return (
        <svg id="policy-end-wave" className="rotate-180 duration-300 scale-y-[1.01]" viewBox="0 0 1440 200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="policy-end-wave-gradient" x1="0" x2="0" y1="1" y2="0">
                    <stop stopColor="rgba(1, 101, 183, 1)" offset="0%"></stop>
                    <stop stopColor="rgba(1, 101, 183, 1)" offset="100%"></stop>
                </linearGradient>
            </defs>
            <path className="translate-x-0 translate-y-0 opacity-100" fill="url(#policy-end-wave-gradient)" d="M0,140L120,126.7C240,113,480,87,720,90C960,93,1200,127,1440,116.7C1680,107,1920,53,2160,26.7C2400,0,2640,0,2880,13.3C3120,27,3360,53,3600,56.7C3840,60,4080,40,4320,30C4560,20,4800,20,5040,23.3C5280,27,5520,33,5760,36.7C6000,40,6240,40,6480,36.7C6720,33,6960,27,7200,23.3C7440,20,7680,20,7920,43.3C8160,67,8400,113,8640,116.7C8880,120,9120,80,9360,56.7C9600,33,9840,27,10080,36.7C10320,47,10560,73,10800,100C11040,127,11280,153,11520,160C11760,167,12000,153,12240,126.7C12480,100,12720,60,12960,36.7C13200,13,13440,7,13680,13.3C13920,20,14160,40,14400,60C14640,80,14880,100,15120,96.7C15360,93,15600,67,15840,53.3C16080,40,16320,40,16560,50C16800,60,17040,80,17160,90L17280,100L17280,200L17160,200C17040,200,16800,200,16560,200C16320,200,16080,200,15840,200C15600,200,15360,200,15120,200C14880,200,14640,200,14400,200C14160,200,13920,200,13680,200C13440,200,13200,200,12960,200C12720,200,12480,200,12240,200C12000,200,11760,200,11520,200C11280,200,11040,200,10800,200C10560,200,10320,200,10080,200C9840,200,9600,200,9360,200C9120,200,8880,200,8640,200C8400,200,8160,200,7920,200C7680,200,7440,200,7200,200C6960,200,6720,200,6480,200C6240,200,6000,200,5760,200C5520,200,5280,200,5040,200C4800,200,4560,200,4320,200C4080,200,3840,200,3600,200C3360,200,3120,200,2880,200C2640,200,2400,200,2160,200C1920,200,1680,200,1440,200C1200,200,960,200,720,200C480,200,240,200,120,200L0,200Z"></path>
        </svg>
    )
}

export default function PrivacyPolicy() {
    return (
        <section className="pt-32 lg:pt-40">
            <div className="flex flex-col justify-center max-w-screen-2xl mx-auto items-center gap-6 px-8 md:px-16">
                <h4 className="text-black font-bold text-40 leading-40 text-center md:text-50 md:leading-44 lg:text-60 lg:leading-62">Política de privacidade</h4>
                <p className="text-black font-normal text-16 leading-4 text-center md:text-18 lg:text-20 lg:leading-5">
                    Esta Política de Privacidade descreve como o site Computação Amostra do CESUPA (doravante referido como "nós", "nosso" ou "site") coleta, usa e protege as informações pessoais dos usuários durante o processo de votação aberta, utilizando o serviço de autenticação OAuth do Google em conjunto com o NextAuth para obter o endereço de e-mail, foto de perfil e nome dos usuários, em conformidade com a Lei nº 13.709 de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais), doravante denominada de "LGPD".
                </p>
            </div>
            <StartWave />
            <div className="bg-primary-100">
                <div className="flex flex-col max-w-screen-2xl mx-auto items-center justify-center gap-16 px-8 py-4 md:px-16 lg:gap-20">
                    <TermsCard title="Coleta de Informações">
                        Para participar da votação aberta no site Computação Amostra, é necessário autenticar-se usando o serviço de autenticação OAuth do Google, em conjunto com o NextAuth. Durante o processo de autenticação, o Google e o NextAuth podem fornecer ao nosso site as seguintes informações pessoais do usuário: endereço de e-mail, foto de perfil e nome.
                    </TermsCard>
                    <TermsCard title="Uso das Informações">
                        As informações pessoais coletadas durante o processo de autenticação com o Google e o NextAuth serão usadas exclusivamente para fins de identificação do usuário e para permitir a participação na votação aberta do site Computação Amostra, conforme a LGPD. Essas informações não serão compartilhadas com terceiros sem o consentimento prévio do usuário, a menos que exigido por lei.
                    </TermsCard>
                    <TermsCard title="Proteção das Informações">
                        Nós implementamos medidas de segurança adequadas para proteger as informações pessoais dos usuários contra acesso não autorizado, divulgação, alteração ou destruição, conforme a LGPD. No entanto, nenhum sistema de segurança é completamente impenetrável, e não podemos garantir a segurança absoluta das informações pessoais dos usuários.
                    </TermsCard>
                    <TermsCard title="Cookies">
                        Nós implementamos medidas de segurança adequadas para proteger as informações pessoais dos usuários contra acesso não autorizado, divulgação, alteração ou destruição, conforme a LGPD. No entanto, nenhum sistema de segurança é completamente impenetrável, e não podemos garantir a segurança absoluta das informações pessoais dos usuários.
                    </TermsCard>
                    <TermsCard title="Links Externos">
                        Nosso site pode conter links para sites de terceiros. Não nos responsabilizamos pelas práticas de privacidade ou pelo conteúdo desses sites. Recomendamos que os usuários revisem as políticas de privacidade dos sites de terceiros antes de fornecerem qualquer informação pessoal, conforme a LGPD.
                    </TermsCard>
                    <TermsCard title="Alterações na Política de Privacidade">
                        Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas práticas de coleta, uso e proteção de informações, conforme a LGPD. Recomendamos que os usuários revisem esta página regularmente para se manterem informados sobre as práticas de privacidade do nosso site.
                    </TermsCard>
                    <TermsCard title="Consentimentos">
                        Ao utilizar o serviço de autenticação OAuth do Google em conjunto com o NextAuth para participar da votação aberta no site Computação Amostra, o usuário concorda com a coleta, uso e proteção das informações pessoais de acordo com esta Política de Privacidade, conforme a LGPD. O usuário tem o direito de revogar seu consentimento a qualquer momento, entrando em contato conosco através dos meios de contato fornecidos no site.
                    </TermsCard>
                    <TermsCard title="Contato">
                        Se o usuário tiver alguma dúvida, preocupação ou solicitação em relação a esta Política de Privacidade, ou ao uso de suas informações pessoais, ele pode entrar em contato conosco através dos seguintes meios
                    </TermsCard>
                </div>
            </div>
            <EndWave />
        </section>
    )
}