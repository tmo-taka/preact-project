import { Suspense } from 'preact/compat';
import { PlayButton } from '@/components/PlayButton'
import { InputJapaneseForm } from "@/components/InputJapaneseForm";
import { DisplayText } from '@/components/DisplayText'

const AudioBlock = () => {
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

export default AudioBlock;