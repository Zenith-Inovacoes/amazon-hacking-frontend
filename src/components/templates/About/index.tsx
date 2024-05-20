import Button from "@/components/atoms/Button"
import GoalCard from "./components/GoalCard"
import NumberCard from "./components/NumberCard"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

// Images
import Image from "next/image"
import AboutGoalMain from "public/images/About-Goal-Image.svg"
import AboutMainImage from "public/images/About-Main.svg"
import AboutGoal1 from "public/images/About-Goal-1.svg"
import AboutGoal2 from "public/images/About-Goal-2.svg"
import AboutGoal3 from "public/images/About-Goal-3.png"
import AboutGoal4 from "public/images/About-Goal-4.png"
import AboutNumber1 from "public/images/About-Number-1.svg"
import AboutNumber2 from "public/images/About-Number-2.png"
import AboutNumber3 from "public/images/About-Number-3.png"
import AboutNumberImage from "public/images/About-Numbers-Image.svg"
import AboutNumberPlant from "public/images/About-Number-Plant.png"

const FirstWave = () => {
    return (
        <svg id="about-first-wave" className="rotate-0 duration-300" viewBox="0 0 1440 320" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="about-first-wave-gradient" x1="0" x2="0" y1="1" y2="0">
                    <stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop>
                    <stop stop-color="rgba(255, 255, 255, 1)" offset="100%"></stop>
                </linearGradient>
            </defs>
            <path className="translate-x-0 translate-y-0 opacity-100" fill="url(#about-first-wave-gradient)" d="M0,224L80,213.3C160,203,320,181,480,144C640,107,800,53,960,42.7C1120,32,1280,64,1440,101.3C1600,139,1760,181,1920,170.7C2080,160,2240,96,2400,101.3C2560,107,2720,181,2880,202.7C3040,224,3200,192,3360,176C3520,160,3680,160,3840,176C4000,192,4160,224,4320,202.7C4480,181,4640,107,4800,106.7C4960,107,5120,181,5280,192C5440,203,5600,149,5760,128C5920,107,6080,117,6240,149.3C6400,181,6560,235,6720,224C6880,213,7040,139,7200,133.3C7360,128,7520,192,7680,197.3C7840,203,8000,149,8160,106.7C8320,64,8480,32,8640,58.7C8800,85,8960,171,9120,208C9280,245,9440,235,9600,192C9760,149,9920,75,10080,85.3C10240,96,10400,192,10560,218.7C10720,245,10880,203,11040,186.7C11200,171,11360,181,11440,186.7L11520,192L11520,320L11440,320C11360,320,11200,320,11040,320C10880,320,10720,320,10560,320C10400,320,10240,320,10080,320C9920,320,9760,320,9600,320C9440,320,9280,320,9120,320C8960,320,8800,320,8640,320C8480,320,8320,320,8160,320C8000,320,7840,320,7680,320C7520,320,7360,320,7200,320C7040,320,6880,320,6720,320C6560,320,6400,320,6240,320C6080,320,5920,320,5760,320C5600,320,5440,320,5280,320C5120,320,4960,320,4800,320C4640,320,4480,320,4320,320C4160,320,4000,320,3840,320C3680,320,3520,320,3360,320C3200,320,3040,320,2880,320C2720,320,2560,320,2400,320C2240,320,2080,320,1920,320C1760,320,1600,320,1440,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
    )
}

const MiddleWave = () => {
    return (
        <div className="bg-white -mt-20 md:-mt-28 lg:mt-0">
            <svg id="about-middle-wave" className="rotate-0 duration-300" viewBox="0 0 1440 260" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="about-middle-wave-gradient" x1="0" x2="0" y1="1" y2="0">
                        <stop stop-color="rgba(1, 101, 183, 1)" offset="0%"></stop>
                        <stop stop-color="rgba(1, 101, 183, 1)" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <path className="translate-x-0 translate-y-0 opacity-100" fill="url(#about-middle-wave-gradient)" d="M0,156L120,160.3C240,165,480,173,720,147.3C960,121,1200,61,1440,65C1680,69,1920,139,2160,138.7C2400,139,2640,69,2880,47.7C3120,26,3360,52,3600,56.3C3840,61,4080,43,4320,39C4560,35,4800,43,5040,52C5280,61,5520,69,5760,60.7C6000,52,6240,26,6480,26C6720,26,6960,52,7200,52C7440,52,7680,26,7920,21.7C8160,17,8400,35,8640,39C8880,43,9120,35,9360,30.3C9600,26,9840,26,10080,47.7C10320,69,10560,113,10800,117C11040,121,11280,87,11520,78C11760,69,12000,87,12240,86.7C12480,87,12720,69,12960,52C13200,35,13440,17,13680,17.3C13920,17,14160,35,14400,73.7C14640,113,14880,173,15120,182C15360,191,15600,147,15840,138.7C16080,130,16320,156,16560,151.7C16800,147,17040,113,17160,95.3L17280,78L17280,260L17160,260C17040,260,16800,260,16560,260C16320,260,16080,260,15840,260C15600,260,15360,260,15120,260C14880,260,14640,260,14400,260C14160,260,13920,260,13680,260C13440,260,13200,260,12960,260C12720,260,12480,260,12240,260C12000,260,11760,260,11520,260C11280,260,11040,260,10800,260C10560,260,10320,260,10080,260C9840,260,9600,260,9360,260C9120,260,8880,260,8640,260C8400,260,8160,260,7920,260C7680,260,7440,260,7200,260C6960,260,6720,260,6480,260C6240,260,6000,260,5760,260C5520,260,5280,260,5040,260C4800,260,4560,260,4320,260C4080,260,3840,260,3600,260C3360,260,3120,260,2880,260C2640,260,2400,260,2160,260C1920,260,1680,260,1440,260C1200,260,960,260,720,260C480,260,240,260,120,260L0,260Z"></path>
            </svg>
        </div>
    )
}

export default function About() {
    const aboutNumbersRef = useRef<HTMLDivElement>(null)
    const goalCardVariants = {
        hidden: {
            opacity: 0,
            x: -20
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: .4,
                duration: .5,
                ease: "easeIn",
            },
        }
    }

    useEffect(() => {
        let offsetTop = aboutNumbersRef.current!.offsetTop

        window.addEventListener("resize", () => {
            aboutNumbersRef.current!.style.position = "static"
            offsetTop = aboutNumbersRef.current!.offsetTop
            aboutNumbersRef.current!.style.position = "sticky"
        })

        function scroll() {
            const elementHeight = aboutNumbersRef.current!.offsetHeight
            const windowHeight = window.innerHeight
            const spaceLeft = elementHeight - windowHeight
            const diff = offsetTop - window.scrollY

            if (diff < 0) {
                if (Math.abs(diff) >= spaceLeft) {
                    aboutNumbersRef.current!.style.top = `-${spaceLeft}px`
                } else {
                    aboutNumbersRef.current!.style.top = `${diff}px`
                }
            }
        }

        window.addEventListener("scroll", scroll)

        return () => {
            window.removeEventListener("resize", () => {
                offsetTop = aboutNumbersRef.current!.offsetTop
            })
            window.removeEventListener("scroll", scroll)
        }
    }, [aboutNumbersRef])

    return (
        <>
            <FirstWave />
            {/* About */}
            <div className="h-fit relative bg-white pt-8 before:w-full before:h-1 before:bg-white before:top-[-2px] before:left-0 before:absolute lg:pb-32 2xl:pt-0">
                <div className="w-full h-24 opacity-30 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain absolute bottom-[35%] lg:bottom-[0%]" />
                <div className="flex flex-col gap-9 justify-between items-center max-w-screen-2xl mx-auto lg:flex-row">
                    <motion.div viewport={{
                        once: true,
                        amount: .25,
                    }} initial="hidden" whileInView="show" variants={{
                        hidden: {
                            opacity: 0,
                        },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: .5,
                                duration: .5,
                                ease: "easeIn",
                            },
                        }
                    }} className="flex gap-7 items-center justify-center flex-col px-8 lg:flex-1 lg:items-start">
                        <motion.h3 variants={{
                            hidden: {
                                opacity: 0,
                                x: "-20px"
                            },
                            show: {
                                opacity: 1,
                                x: "0px",
                                transition: {
                                    duration: 1,
                                    ease: "easeIn"
                                }
                            }
                        }} className="text-40 font-bold text-black leading-44 text-center md:text-50 md:leading-62 lg:text-60 lg:text-left">O Programa</motion.h3>
                        <motion.p variants={{
                            hidden: {
                                opacity: 0,
                                x: "-20px"
                            },
                            show: {
                                opacity: 1,
                                x: "0px",
                                transition: {
                                    duration: 1,
                                    ease: "easeIn"
                                }
                            }
                        }} className="font-normal text-16 leading-5 text-black text-center md:text-18 lg:text-20 lg:leading-6 lg:text-left">
                            O Amazon Hacking é um programa de formação para alunos da Escola de Negócios, Tecnologia e Inovação do CESUPA - ARGO, que visa conectar empresas comprometidas com a sustentabilidade amazônica, a comunidade local e seu conhecimento tradicional, junto ao conhecimento científico e tecnológico em prol do  desenvolvimento bioeconômico da região olhando para uma perspectiva global.
                        </motion.p>
                        <motion.div variants={{
                            hidden: {
                                opacity: 0,
                                x: "-20px"
                            },
                            show: {
                                opacity: 1,
                                x: "0px",
                                transition: {
                                    duration: 1,
                                    ease: "easeIn"
                                }
                            }
                        }}>
                            <Button asChild>
                                <a href="#about-numbers">Saiba mais</a>
                            </Button>
                        </motion.div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ duration: .8, ease: "easeOut" }} className="w-full h-96 relative lg:w-[50%] lg:h-[400px]">
                        <Image src={AboutMainImage} alt="Imagem com 3 pessoas estudando" fill />
                    </motion.div>
                </div>
            </div>
            <MiddleWave />
            {/* Goals */}
            <div ref={aboutNumbersRef} className="bg-primary-100 sticky top-0 pt-8 2xl:pt-0 after:absolute after:w-full after:h-1 after:bg-black after:bottom-[-2px] before:absolute before:w-full before:h-1 before:bg-primary-100 before:top-[-2px]">
                <div className="bg-black absolute h-[15%] w-full bottom-0" />
                <div className="flex gap-24 px-8 justify-center items-center max-w-screen-2xl mx-auto">
                    <motion.div viewport={{
                        once: true,
                        amount: .25,
                    }} initial="hidden" whileInView="show" variants={{
                        hidden: {
                            opacity: 0,
                        },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: .5,
                                duration: .5,
                                ease: "easeIn",
                            },
                        }
                    }} className="flex flex-col gap-7 items-center justify-center flex-1">
                        <motion.h3 variants={{
                            hidden: {
                                opacity: 0,
                                x: "-20px"
                            },
                            show: {
                                opacity: 1,
                                x: "0px",
                                transition: {
                                    duration: 1,
                                    ease: "easeIn"
                                }
                            }
                        }} className="text-40 font-bold text-white leading-44 w-full text-center md:text-50 md:text-left md:leading-62 lg:text-60">O que buscamos?</motion.h3>
                        <motion.p variants={{
                            hidden: {
                                opacity: 0,
                                x: "-20px"
                            },
                            show: {
                                opacity: 1,
                                x: "0px",
                                transition: {
                                    duration: 1,
                                    ease: "easeIn"
                                }
                            }
                        }} className="font-normal text-16 leading-5 text-white text-center md:text-left md:text-18 lg:text-20 lg:leading-6">
                            Os universitários irão elaborar projetos de impacto para resolução de problemas complexos a partir dos desafios pontuados pelos próprios moradores locais.
                        </motion.p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ duration: .8, ease: "easeOut" }} className="hidden md:block relative w-[40%] h-52 lg:h-80">
                        <Image src={AboutGoalMain} alt="Rapaz mexendo no seu notebook e pensando" fill />
                    </motion.div>
                </div>
                <div className="relative z-10 max-w-[100vw] w-full mx-auto">
                    <div className="w-full h-24 opacity-30 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain absolute bottom-[60%]" />
                    <div className="w-full h-24 opacity-30 z-0 bg-[url('/images/symbol.png')] bg-repeat bg-contain absolute bottom-[20%]" />
                    <motion.div viewport={{
                        once: true,
                        amount: .5,
                    }} initial="hidden" whileInView="show" variants={goalCardVariants} className="horizontal-snap cursor-grab lg:cursor-default flex grid-cols-2 gap-5 py-16 pl-16 relative z-10 lg:grid lg:px-8 max-w-screen-2xl lg:mx-auto lg:place-items-center">
                        <GoalCard variants={goalCardVariants} title="Imersão Educacional" image={AboutGoal1} altImage="Duas pessoas numa aventura">
                            Criar <b className="text-primary-100">experiências imersivas</b> em ilhas e comunidades para os alunos.
                        </GoalCard>
                        <GoalCard variants={goalCardVariants} title="Interação com Mercado" image={AboutGoal2} altImage="Um homem e uma mulher apertando as mãos">
                            Inter-relacionamento entre <b className="text-primary-100">alunos e empresas</b> de tecnologia do mercado.
                        </GoalCard>
                        <GoalCard variants={goalCardVariants} title="Inovação Amazônica" image={AboutGoal3} altImage="Um homem mexendo no celular">
                            Fomentar <b className="text-primary-100">soluções tecnológicas e empreendedoras</b> na região amazônica.
                        </GoalCard>
                        <GoalCard variants={goalCardVariants} title="Rede Inovadora" image={AboutGoal4} altImage="Três pessoas conectadas">
                            Fortalecer o <b className="text-primary-100">ecossistema de inovação</b> e <b className="text-primary-100">networking</b>.
                        </GoalCard>
                    </motion.div>
                </div>
                <div className="bg-black md:bg-transparent relative">
                    <div className="flex gap-16 max-w-screen-2xl w-full mx-auto px-8">
                        <div className="flex flex-1 pt-20 pb-20 flex-col gap-3 relative z-10 grid-cols-2 grid-rows-[1fr_1fr] md:grid lg:grid-cols-[1fr_auto] xl:grid-cols-2">
                            <NumberCard className="md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3" title="Alunos" slowStartAnimation={false} interval={10} number={240} image={AboutNumber1} altImage="Ícone de um usuário" />
                            <NumberCard title="Equipes" number={30} image={AboutNumber2} altImage="Ícone de vários usuários" />
                            <NumberCard title="Mentores" number={25} image={AboutNumber3} altImage="Ícone de vários executivos" />
                            <Image src={AboutNumberPlant} alt="Planta" className="hidden lg:block absolute bottom-4 -left-8 z-10" height={248} width={160} />
                        </div>
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .5 }} transition={{ duration: .8, ease: "easeOut" }} className="relative hidden lg:block w-[30%] translate-y-6">
                            <Image src={AboutNumberImage} alt="Homem sentado mexendo no seu notebook com árvores atrás" fill />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}