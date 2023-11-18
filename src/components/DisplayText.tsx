type Props = {
    englishText: {
        value: string
    }
}

export const DisplayText: preact.FunctionComponent<Props> = (props) => {

    const { englishText } = props

    return (
        <div class="w-full bg-slate-300 h-12 p-2 text-left">
            {englishText.value}
        </div>
    );
};