import {Dispatch, SetStateAction} from "react";

const TriggerError = (
    message: string,
    setError: Dispatch<SetStateAction<boolean>>,
    setErrorMessage: Dispatch<SetStateAction<string>>
) => {
    setError(true);
    setErrorMessage(message);
    setTimeout(() => {
            setError(false);
            setErrorMessage("");
        },
        3500)
}

export default TriggerError;