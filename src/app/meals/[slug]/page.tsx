type Props = {
    params: { slug: string }
}

export default async function Post({ params }: Props) {
    const { slug } = await params
    
    return (
        <div>
            <h1>{slug}</h1>
        </div>
    )
}