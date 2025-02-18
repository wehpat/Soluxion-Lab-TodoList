import { useState } from "react";
export default function Header() {
    const [title, setTitle] = useState("")

    const handleInputChange = () => {
        setTitle(event.target.value)
    }

    return (
        <div className="flex items-center justify-center p-5 mt-4 mb-0">
            <input 
                type='text'
                placeholder="To do list title"
                value={title}
                onChange= {handleInputChange}
                className="font-serif text-4xl font-medium 
                border-b-2 border-b-brownDefault focus-within:outline-hidden 
                placeholder-black"
            />          
        </div>
    )
    }
