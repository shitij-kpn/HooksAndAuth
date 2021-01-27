export default function InputNewTask(){
    return(
        <>
            <div className="p-2 m-4 bg-fuchsia-400">
                <input className="p-2 m-2 rounded caret-color" type="text" placeholder="title"/>
                <input className="p-2 m-2 rounded caret-color" type="text" placeholder="Description"/>
                <button>Add new Task!!</button>
            </div>
        </>
    )
}