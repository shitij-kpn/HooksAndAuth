import useTodoContext from "context/useTodoContext"

interface ListProps{
    title:string;
    description:string;
    key?:number;
    id?:number;
}

export default function ListItem({title,description}:ListProps){
    const [,dispatch] = useTodoContext();
    return (
        <div className=" max-w-xl sm:px-6 lg:px-8 p-4 ">
            <div className="relative overflow-hidden shadow-md text-gray-100 rounded">
                <button 
                    className=" absolute top-0 right-0 text-white font-semibold pt-0.5 pr-2 hover:text-red-600"
                    onClick={() => dispatch({type:'RemoveTodo',payload:title})}
                >x</button>
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