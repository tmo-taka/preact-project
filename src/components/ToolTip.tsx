import { useState } from "preact/hooks";

type Props = {
    buttonText: string;
    hiddenText: string;
};

export const ToolTip: preact.FunctionComponent<Props> = (props) => {
    const {buttonText, hiddenText} = props;
    const [isFlag, setIsFlag] = useState(false);
    return (
        <>
            {isFlag && <p>{hiddenText}</p>}
            <div
                onMouseEnter={() => setIsFlag(true)}
                onMouseLeave={() => setIsFlag(false)}
            >
                {buttonText}
            </div>
        </>
    );
};