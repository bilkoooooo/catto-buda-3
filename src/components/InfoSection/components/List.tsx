export const List = ({items, title}: { items: string[], title: string | null }) => {
    return (
        <div className="text-left py-4">
            {title && <h2 className="font-bold">{title}</h2>}
            <ol className="pl-4 list-none">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </div>
    )
}
