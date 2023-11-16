type Props = {
    englishText: string
}

export const DisplayText: preact.FunctionComponent<Props> = (props) => {

    return (
        <div class="w-full bg-slate-300 h-12 p-2 text-left">
            {props.englishText}
        </div>
    );
};