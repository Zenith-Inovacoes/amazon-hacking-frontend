import { DialogRoot, DialogContent, DialogOverlay, DialogPortal, DialogTrigger } from "../..";
import { useTranslations } from "next-intl";

export default function Alo() {
    const t = useTranslations("Home.About.GoalCards.innovation")

    return (
        <DialogRoot>
            <DialogTrigger className="px-4 py-2 bg-gray-800 text-white font-bold text-base cursor-pointer z-50">
                Teste
            </DialogTrigger>
            <DialogPortal>
                <DialogOverlay className="fixed inset-0 bg-black/40" />
                <DialogContent>
                    <div className="p-4 bg-white shadow-md rounded-md">
                        <p className="text-gray-800">Hello, world!</p>
                    </div>
                </DialogContent>
            </DialogPortal>
        </DialogRoot>
    )
}