import { useState } from "react";



const WithCounter = (OldComponent , incrementBy = 1) =>{

    
    return function EnhanceComponent(props){

        // Note It Voh YAhan CAll Hoga Na Ki Upar
        
        const [count , setcount] = useState(0);
        
        return (

            <OldComponent {...props} count = {count}  incrementCount={()=>setcount(count+incrementBy)} />

        )

    }
}

export default  WithCounter;



// Structure
// const NewComponent = WithCounter(oldcounter)
