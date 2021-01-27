interface ListProps{
    title:string;
    description:string;
    key?:number;
}

export default function ListItem({title,description}:ListProps){
    return (
        <div className=" max-w-xl sm:px-6 lg:px-8 p-4 ">
            <div className="overflow-hidden shadow-md text-gray-100 rounded">
                <div className="px-6 py-4 bg-gray-800 border-b border-gray-600 font-bold uppercase">
                    {title}
                </div>

                <div className="p-6 bg-gray-800 border-b border-gray-600">
                    {description}
                </div>
            </div>
        </div>
    )
}