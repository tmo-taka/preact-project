type Props = {
    englishText: string
}

export const DisplayText: preact.FunctionComponent<Props> = (props) => {

    return (
        <div class="w-full">
            {props.englishText}
        </div>
    );
};