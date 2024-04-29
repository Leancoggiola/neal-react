import { createContext } from "react";

interface AccordionContextType {
    visible?: boolean,
    toggleAccordion?: () => void,
    alignIconRight?: boolean,
    useChevronIcon?: boolean
}

export const AccordionContext = createContext<AccordionContextType>({
    visible: false,
    toggleAccordion: undefined, 
    alignIconRight: false,
    useChevronIcon: false
})

export const AccordionProvider = AccordionContext.Provider;
export const AccordionConsumer = AccordionContext.Consumer;