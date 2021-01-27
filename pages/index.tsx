import ListItem from "components/ListItem"
import Header from "components/Header"
import Footer from "components/Footer"
import InputNewTask from "components/InputNewTask"

export default function Home(){
    //fetch tasks
    //show task in lists
    //ability to take new tasks
    //updating the screen
    return (
        <>
        <Header/>
        <InputNewTask/>
        <main className="container min-h-80">
            <ListItem/>
            <ListItem/>
            <ListItem/>
        </main>
        <Footer/>
        </>
    )
}


