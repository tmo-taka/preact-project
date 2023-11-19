import { PlayButton } from './PlayButton'
import { Suspense } from 'preact/compat';
import { InputJapaneseForm } from "./InputJapaneseForm";
import { DisplayText } from './DisplayText'

export const AudioBlock = () => {
    return (
        <div class="w-96">
            <InputJapaneseForm />
            <div class="flex w-full">
                <div class="basis-2/3">
                    <DisplayText />
                </div>
                <div class="basis-1/3">
                    <Suspense fallback={<div>loading...</div>}>
                        <PlayButton />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}