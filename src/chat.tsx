import { useTextToSpeak } from "./hooks/useTextToSpeak"

export const Chat = () => {
    useTextToSpeak('test');
    return (
        <p>
            next url:https://play.ht/text-to-speech-api/
        </p>
    )
}