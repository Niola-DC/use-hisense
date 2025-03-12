import { forwardRef } from "react";



const Modal = forwardRef((ref)=> {

    

    return(
        <div>
            <p>In the modal</p>
            <button>Close</button>
        </div>
    )
})
    



const Navbar = () => {
    

    return(

        <button>Log in</button>
    )

}
export default Navbar;