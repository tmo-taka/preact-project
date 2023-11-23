import { useState, useEffect } from "preact/hooks";
import { Suspense, lazy } from 'preact/compat';
import { createAppContext, AppState }from '@/store/app';
import { Loading } from '@/components/Loading'
import '@/app.css'

export { Page };

const Page = () => {
    return (
        <AppState.Provider value={createAppContext()}>
            <div class="flex justify-center">
                <DynamicComponent />
            </div>
        </AppState.Provider>
    );
}

const DynamicComponent = () => {
    const [Component, setComponent] = useState(() => Loading)
    useEffect(() => {
        setComponent(() => lazy(() => import('@/components/AudioBlock')))
    },[])

    return (
        <Suspense fallback={<Loading />}>
            <Component />
        </Suspense>
    )
}