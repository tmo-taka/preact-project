import { effect, signal } from "@preact/signals";

export const Form: preact.FunctionComponent = () => {
    const text = signal('');
    const submit = () => {
        alert(text.value + 'が送信されました');
    }

    const input = event =>{
        console.log(event);
        const inputValue = event.target.value;
        text.value = inputValue;
    }


    return (
        <>
            <form onSubmit={() =>submit()}>
                <input type="text" value={text} onInput={input}/>
            </form>
        </>
    );
};