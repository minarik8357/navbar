import Link from "next/link";

export const Navbar=()=>{

    return(

        <nav>
                 
            <ul>
                <li>
                    <Link /*className="text-3xld text-blue-900 text-2x1 font-bold line"*/ href="/about">About</Link>
                  
                </li>
                
                <li>
                    <Link /*className="text-3xld text-blue-900 text-2x1 font-bold line" */href="/projects">Projects</Link>
                </li>
                <li>
                    <Link /*className="text-3xld text-blue-900 text-2x1 font-bold line"*/ href="/contact">Contacts</Link>
                </li>
                
            </ul>

        </nav>
    )
}; 






















