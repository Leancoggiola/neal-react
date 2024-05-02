import { createContext } from "react";

export type ElementType = 'text' | 'select' | 'textarea' | 'date'

interface FormWrapperContext {
    id: string,
    value: any,
    elementType: ElementType,
    isDisabled: boolean,
    isRequired: boolean,
    isFocus: boolean,
    isActive: boolean,
    isError: boolean,
    hasContent: boolean,
    hasLabel: boolean,
    hasPlaceholder: boolean,
    setId: (id: string) => void,
    setValue: (value: any) => void,
    setElementType: (type: ElementType) => void,
    setIsDisabled: (disabled: boolean) => void,
    setIsRequired: (required: boolean) => void,
    setIsFocus: (focused: boolean) => void,
    setIsActive: (active: boolean) => void,
    setIsError: (error: boolean) => void,
    setHasContent: (hasContent: boolean) => void,
    setHasLabel: (hasLabel: boolean) => void,
    setHasPlaceholder: (hasPlaceholder: boolean) => void,
}

export const FormWrapperContext = createContext<FormWrapperContext>({
    id: "",
    value: '',
    elementType: "text",
    isDisabled: false,
    isRequired: false,
    isFocus: false,
    isActive: false,
    isError: false,
    hasContent: false,
    hasLabel: false,
    hasPlaceholder: false,
    setId: () => null,
    setValue: () => null,
    setElementType: () => null,
    setIsDisabled: () => null,
    setIsRequired: () => null,
    setIsFocus: () => null,
    setIsActive: () => null,
    setIsError: () => null,
    setHasContent: () => null,
    setHasLabel: () => null,
    setHasPlaceholder: () => null,
})

export const FormWrapperProvider = FormWrapperContext.Provider;
export const FormWrapperConsumer = FormWrapperContext.Consumer;