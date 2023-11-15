import { AudioForm } from './components/AudioForm'
import { RecoilRoot} from 'recoil';
import { useTextToEnglish } from './hooks/useTextToEnglish'
import './app.css'

export function App() {
    const res = useTextToEnglish('ddd');

    return (
        <>
            <div>
                <RecoilRoot>
                    <AudioForm />
                </RecoilRoot>
            </div>
        </>
    )
}
