'use client'


export default function Error({ error }: ErrorEvent) {
    console.log(error);
    
    return (
        <main className="error">
            <h1>An Error Occured</h1>
            <p>{error.message}</p>
            <p></p>
        </main>
    )
}