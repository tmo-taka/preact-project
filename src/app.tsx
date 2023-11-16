import { AudioBlock } from './components/AudioBlock'
import { RecoilRoot} from 'recoil';
import { useTextToEnglish } from './hooks/useTextToEnglish'
import './app.css'

export function App() {
    return (
        <>
            <div>
                <RecoilRoot>
                    <AudioBlock />
                </RecoilRoot>
            </div>
        </>
    )
}
