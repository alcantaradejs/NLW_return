import { CloseButton } from "./CloseButton";

import bugImageURL from "../assets/bug.svg";
import ideaImageURL from "../assets/idea.svg";
import thoughtImageURL from "../assets/thought.svg";

const feedbacTypes = {
    BUG:{
        title: "Problema",
        image: {
            source: bugImageURL,
            alt:"Imagem de um inseto"
        }
    },
    IDEA:{
        title: "Ideia",
        image: {
            source: ideaImageURL,
            alt:"Imagem de uma lampada"
        }
    },
    OTHER:{
        title: "Outro",
        image: {
            source: thoughtImageURL,
            alt:"Imagem de um balão de pensamento"
        }
    }
}

export function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6" >Deixe seu feedback</span>
                <CloseButton/>
            </header>

            <div className="flex py-8 w-full gap-2">
                { Object.entries(feedbacTypes).map(([key, value]) => {
                    return(
                        <button className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none">
                            <img src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                }) }
            </div>
            
            <footer className="text-xs text-neutral-400" >
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://www.rocketseat.com.br/">Rocketseat</a> 
            </footer>
        </div>
    );
}