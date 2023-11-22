import { useState, useEffect } from "preact/hooks";
import { Suspense, lazy } from 'preact/compat';
import { createAppContext, AppState }from '@/store/app';
import '@/app.css'

export { Page };

const Page = () => {
    return (
        <AppState.Provider value={createAppContext()}>
            <DynamicComponent />
        </AppState.Provider>
    );
}

const Loading = () => {
    return <div>ローディング</div>
}

const DynamicComponent = () => {
    const [Component, setComponent] = useState(() => Loading)
    useEffect(() => {
        setComponent(() => lazy(() => import('@/components/AudioBlock')))
    },[])

    return (
        <Suspense fallback={<div>ローディング</div>}>
            <Component />
        </Suspense>
    )
}