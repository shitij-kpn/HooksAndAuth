export default function InputNewTask(){
    return(
        <>
            <div className="p-2 m-4 bg-fuchsia-400">
                <input 
                    className="p-2 m-2 rounded caret-color focus:ring-2 focus:ring-fuchsia-50" 
                    type="text" 
                    placeholder="title"
                />
                <input 
                    className="p-2 m-2 rounded caret-color focus:ring-2 focus:ring-fuchsia-50" 
                    type="text" 
                    placeholder="Description"
                />
                <button className=" border-4 p-2 border-white rounded-xl hover:bg-white text-gray-700 focus:-translate-y-2">Add new Task!!</button>
            </div>
        </>
    )
}