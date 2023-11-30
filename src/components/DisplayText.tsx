import { useContext } from "preact/hooks";
import { AppState } from '@/store/app'

export const DisplayText: preact.FunctionComponent = () => {
    const state = useContext(AppState);
    // const { englishText } = props

    return (
        <div class="w-full bg-slate-300 h-12 p-2 text-left">
            {state.englishText.value}
        </div>
    );
};