'use client'

interface TitleProps {
    title: string
    className?: string
}

const Title = (props: TitleProps) => {

    return (
        <h1 className={`leading-9 ff-big-shoulders-display cl-grey opacity-50 text-4xl ${props.className}`}>{props.title}</h1>
    )
}

export default Title