export default function Footer(){
    const date = new Date();
    const year = date.getFullYear();
    
    return(
        <footer className="bg-gray-700 text-base flex items-center justify-center text-white p-4">
            &copy; Shitij Talan {year}
        </footer>
    )
}