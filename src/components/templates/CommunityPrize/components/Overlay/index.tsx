"use client"

import { Button } from "@/components/atoms"
import ProjectOverlay from "@/components/organisms/ProjectOverlay"
import { ProjectOverlayChildrenProps } from "@/components/organisms/ProjectOverlay/types"

export default function OverlayCommunityPrize({overlayData, buttonText}: { overlayData: ProjectOverlayChildrenProps, buttonText: string}) {
    return (
        <ProjectOverlay
            videoURL='https://www.youtube-nocookie.com/embed/djD7vOYDc9w'
            variant='past'
            overlayTrigger={
                <Button variant='secondary'>{buttonText}</Button>
            }
        >
            {overlayData}
        </ProjectOverlay>
    )
}