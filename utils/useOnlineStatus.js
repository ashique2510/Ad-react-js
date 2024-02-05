import { useEffect, useState } from "react";


const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true)

    useEffect(()=>{
         
         window.addEventListener("online",()=> {
           setOnlineStatus(true)
         })

          window.addEventListener('online', () => {
            setOnlineStatus(false);
          });

    },[])

    return onlineStatus;
}

export default useOnlineStatus;