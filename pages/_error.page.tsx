import '@/app.css'

export { Page };

type PageContext = {
    is404?: boolean,
    is500?: boolean,
}

const Page = (pageContext:PageContext):string => {
    console.log(pageContext);
    const {is404, is500} = pageContext;

    const getStatus = () => {
        let errorStatus = '500'
        if(is404) {
            errorStatus = '404'
        }

        return errorStatus
    }
    return (
        <div class="bg-accent p-6 text-center text-white">
            <div class="text-xl">{getStatus()}</div>
            <h1 class="text-2xl">エラーです</h1>
        </div>
    );
}