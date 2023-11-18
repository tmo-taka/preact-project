import { signal } from "@preact/signals";

export const createEnglishTextContext = () => {
    const englishText = signal('')
    return { englishText }
}

