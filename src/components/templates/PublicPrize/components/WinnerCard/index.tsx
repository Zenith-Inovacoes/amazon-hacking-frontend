import { Button } from "@/components/atoms"
import { WinnerCardProps } from "./types"
import Image from "next/image"
import ProjectOverlay from "@/components/organisms/ProjectOverlay"
import { ProjectOverlayChildrenProps } from "@/components/organisms/ProjectOverlay/types"
import PublicPrizeTrophy from 'public/images/Public-Prize-Trophy.svg'

export default function WinnerCard(props: WinnerCardProps) {
    const { name, description, links: { youtube: { en, pt } }, logoUrl, team } = props
    const childrenData: ProjectOverlayChildrenProps = {
        altLogo: "Imagem de um troféu",
        overlayTrigger: <Button>Conheça o projeto</Button>,
        solutionDescription: description,
        solutionName: name,
        teamLogo: logoUrl as string,
        teamMembers: team
    }

    return (
        <div className="px-5 py-5 w-full rounded-[36px] bg-white flex justify-center items-center gap-4 md:max-w-[540px] md:py-14 lg:max-w-[600px] shadow-[0px_183px_51px_0px_rgba(0,0,0,0.00),0px_117px_47px_0px_rgba(0,0,0,0.04),0px_66px_39px_0px_rgba(0,0,0,0.13),0px_29px_29px_0px_rgba(0,0,0,0.21),0px_7px_16px_0px_rgba(0,0,0,0.25)]">
            <div className="relative h-20 w-20 md:h-32 md:w-32">
                <Image src={PublicPrizeTrophy} alt="Troféu" fill />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 md:gap-5">
                <span className="text-black text-36 font-bold leading-9 text-center max-w-[12ch]">{name}</span>
                <ProjectOverlay variant="past" videoURL={pt}>
                    {childrenData}
                </ProjectOverlay>
            </div>
        </div>
    )
}