import { useEffect } from "react";


const Test = ()=>{

    useEffect(()=>{
        fetchData()
    },[])


    const fetchData = async()=> {

        const data = await fetch(
          'https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2952487&lng=73.1362804&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

          console.log('dataaa',data);
          const json = await data.json()
          console.log('jsonn',json);
    }

    return (<>
    </>)
}


export default Test;