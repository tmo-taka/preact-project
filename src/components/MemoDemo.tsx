import { useState } from "preact/hooks";
import { memo } from 'preact/compat';

type Props = {
    child: string
}

// NOTE: propsが常に変更されたら再描画
const GetProps :preact.FunctionComponen<Props> = (props) => {
    const { child } = props;
    return (
        <p>{child}</p>
    )
}

// NOTE: propsの文字数が6以上になった場合にのみ再描画
const MemoProps = memo(GetProps, (prev, next) => {
    console.log(next.child);
    return next.child.length > 6;
})

export const MemoDemo:preact.FunctionComponen = () => {
    const [propsTxt, setPropsTxt] =useState('test');

    return (
        <div>
            <h2>Memo Deomラッパー</h2>
            <MemoProps child={propsTxt} />
            <button onClick={() => {setPropsTxt(propsTxt + 'a')}}>aを追加</button>
        </div>
    )
}