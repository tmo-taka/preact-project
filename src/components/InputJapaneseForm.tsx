import { useState } from "preact/hooks";
import { useTextToEnglish } from '../hooks/useTextToEnglish'
import { englishTextState } from '../store/englishText';
import { useSetRecoilState } from 'recoil'

export const InputJapaneseForm = () => {

    const [inputText, setInputText] = useState('');
    const setEnglishText = useSetRecoilState(englishTextState);

    const setTextFromForm = (event) => {
        const inputValue = event.target.value;
        setInputText(inputValue);
    }

    const translateToEnglish = async() => {
        console.log(inputText);
        const toEnglishText = await useTextToEnglish(inputText);
        setEnglishText(toEnglishText);
        setInputText('');
    }

    return (
        <div class="w-full grid grid-flow-col justify-stretch space-x-4 mb-8">
            <input type="text" value={inputText} onInput={setTextFromForm} onBlur={translateToEnglish} placeholder="Input Japanese..." class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
        </div>
    )
}