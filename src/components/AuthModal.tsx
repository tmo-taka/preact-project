import { useState, useMemo } from "preact/hooks";
import { Modal } from 'flowbite-react'

const postOptions = (text:string) => {
    return {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({
            name: text,
        })
    }
};

type Props = {
    modalFlag: boolean;
}

export const AuthModal: preact.FunctionComponent<Props> = (props) => {
    const [name, setName] = useState<string>('');
    const [openFlag, setOpenFlag] = useState<boolean>(true);
    const {modalFlag} = props;

    console.log(modalFlag);

    useMemo(() => {
        setOpenFlag(modalFlag);
    },[props])

    const setData = (event) => {
        const inputValue = event.target.value;
        setName(inputValue);
    }

    const fetchData = async()  => {
        try {
            const res = await fetch('/login', postOptions(name));
            if(res?.status === 200) {setOpenFlag(false)}
        } catch(e) {
            console.log(e);
        }
    }

    return (
        <div>
            <Modal show={openFlag}>
                <Modal.Header>ユーザー名を入力してください</Modal.Header>
                <Modal.Body>
                    <div class="w-full grid grid-flow-col justify-stretch space-x-4 mb-8">
                        <input type="text" value={name} onInput={setData} onBlur={fetchData} placeholder="Input Japanese..." class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" />
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

