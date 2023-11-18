import { signal } from "@preact/signals";
import { createContext } from "preact";

export const createAppContext = () => {
    const englishText = signal('');
    const mp3Url = signal('')

    // const setEnglishText = (text:string) => {
    //     englishText.value = text;
    // }

    // const setMp3Url = (url:string) => {
    //     mp3Url.value =url;
    // }

    return { englishText, mp3Url}
}

export const AppState = createContext();


