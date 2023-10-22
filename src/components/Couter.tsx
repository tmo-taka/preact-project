import { effect, signal } from "@preact/signals";

export const Counter: preact.FunctionComponent = () => {
    const count = signal(0);
    const text = signal('10未満です');
    effect(() => {
        text.value = count.value > 10 ? '10を超えました' : text.value;
    })
    return (
        <>
            <div>{count}</div>
            <button onClick={() => count.value++}>カウントアップ</button>
            <div>{text}</div>
        </>
    );
};