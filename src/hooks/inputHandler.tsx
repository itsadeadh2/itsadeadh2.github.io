import {Dispatch, KeyboardEvent, SetStateAction} from "react";

const inputHandler = async (
        event: KeyboardEvent<HTMLInputElement>,
        executing: boolean,
        executeFn: (text: string) => Promise<void>,
        inputText: string,
        setInputText: Dispatch<SetStateAction<string>>
        ) => {
    const {key} = event;
    if (key === 'Enter') {
        if (executing) {
            event.preventDefault();
            return;
        }
        await executeFn(inputText)
        event.preventDefault();
    } else if (key === 'Backspace') {
        setInputText((prevState) => prevState.slice(0, -1))
        event.preventDefault();
    } else if (key.length === 1) {
        setInputText((prevState) => prevState + key);
        event.preventDefault();
    }

    // Prevent default action for keys we want to handle differently
    if (['Enter', 'Backspace', 'Alt', 'Delete', 'Meta', 'Control', 'Shift'].includes(key)) {
        event.preventDefault();
    }
}

export default inputHandler;