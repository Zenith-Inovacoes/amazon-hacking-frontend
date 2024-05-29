import ContactLink from "./components/ContactLink"
import { GoMail } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { BsGeoAlt } from "react-icons/bs";

export default function Contacts() {
    return (
        <div className="bg-white">
            <div className="px-8 max-w-screen-2xl pb-16 pt-8 flex flex-col items-start justify-center gap-4 mx-auto md:px-16 lg:flex-row lg:gap-6 lg:items-center lg:pb-24">
                <ContactLink label="Email" icon={GoMail} href="mail:contato@computacao-amostra.com">
                    contato@computacao-amostra.com
                </ContactLink>
                <ContactLink label="Telefone" icon={FiPhone} href="tel:+559132059301">
                    +55 (91) 3205-9301
                </ContactLink>
                <ContactLink label="Localização" icon={BsGeoAlt} href="https://www.google.com/maps/place/Av.+Alcindo+Cacela,+1523+-+Umarizal,+66065-219,+Bel%C3%A9m,+Par%C3%A1,+Brasil/">
                    Av. Alcindo Cacela, 1523 - Umarizal, 66065-219, Belém, Pará, Brasil.
                </ContactLink>
            </div>
        </div>
    )
}