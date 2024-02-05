import { CDN_URL } from "../../utils/constants";


 const HorizontalCard = ({ horiCardData }) => {
   console.log('horiCardData horiCardData', horiCardData);
   
   return (
     <div>
       <h1 className="font-semibold text-3xl leading-7 mt-10 ml-10">
         {horiCardData?.header?.title}
       </h1>

       <div className="overflow-x-auto flex justify-start mt-10 mb-10">
         {horiCardData?.imageGridCards?.info.map((value, index) => (
           <img
             src={CDN_URL + value?.imageId}
             alt="image"
             className="w-[144px] h-[180px] mr-6 object-cover"
           />
         ))}
       </div>
     </div>
   );
 };

 export default HorizontalCard
