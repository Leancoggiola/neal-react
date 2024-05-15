import { BaseSyntheticEvent, Dispatch, RefObject, SetStateAction, createContext } from "react";

interface SelectContext {
    id: string,
    open: boolean,
    optionSelected: number[],
    optionCurrent: number,
    selectValue: string[],
    hasSelectedAllOptions: { selected: boolean, indeterminate: boolean },
    searchOption: string,
    multiple: boolean,
    searchPlaceholder: string,
    totalOptions: number,
    listBoxRef: RefObject<HTMLDivElement>,
    selectSearchRef: RefObject<HTMLInputElement>,
    selectTriggerRef: RefObject<HTMLButtonElement>,
    onChange: (val: any) => void,
    handleChangeSearch: (event: BaseSyntheticEvent) => void,
    handleClickSelectAll: () => void,
    handleClickSearchCheckbox: () => void,
    setOpen: Dispatch<SetStateAction<boolean>>,
    setDisplayedValue: Dispatch<SetStateAction<string[]>>,
    setOptionSelected: Dispatch<SetStateAction<number[]>>,
    setOptionCurrent: Dispatch<SetStateAction<number>>,
    setSelectValue: Dispatch<SetStateAction<string[]>>,
    setHasSelectedMultipleOption: Dispatch<SetStateAction<boolean>>,
}

export const SelectContext = createContext<SelectContext>({
    id: "",
    open: false,
    optionSelected: [0],
    optionCurrent: 0,
    selectValue: [],
    hasSelectedAllOptions: {
        selected: false,
        indeterminate: false
    },
    searchOption: "",
    multiple: false,
    searchPlaceholder: "",
    totalOptions: 0,
    listBoxRef: { current: null },
    selectSearchRef: { current: null },
    selectTriggerRef: { current: null },
    onChange: (val: any) => { },
    handleChangeSearch: (event: BaseSyntheticEvent<object, any, any>) => event,
    handleClickSelectAll: () => { },
    handleClickSearchCheckbox: () => { },
    setOpen: (prevState: SetStateAction<boolean>) => prevState,
    setDisplayedValue: (prevState: SetStateAction<string[]>) => prevState,
    setOptionSelected: (prevState: SetStateAction<number[]>) => prevState,
    setOptionCurrent: (prevState: SetStateAction<number>) => prevState,
    setSelectValue: (prevState: SetStateAction<string[]>) => prevState,
    setHasSelectedMultipleOption: (prevState: SetStateAction<boolean>) => prevState,
})

export const SelectProvider = SelectContext.Provider;
export const SelectConsumer = SelectContext.Consumer;