import { PenSquare, Trash } from "lucide-react"


 export const DefaultTR = () =>{
    return(
<>
{
        [...Array(10)].map((_, index) => (
                
      <tr
      key={index} // Static key since this is hardcoded
      className="flex justify-around w-full text-gray-800  items-center py-2"
      title="carregando Lista de Colaboradores..."
    >
      <td className="flex-1 text-center flex justify-center">
        <td
    
          className="animate-pulse px-2 p-2 w-12 h-12 bg-gray-300 rounded-full"
        >
        </td>
      </td>
      
      {/* Replace dynamic fields with hardcoded values */}
      <td className="flex-1 text-center px-2 ml-2 py-4 bg-gray-200 animate-pulse"></td> {/* Name */}
      <td className="flex-1 text-center px-2 ml-2 py-4 bg-gray-200 animate-pulse"></td> {/* Name */}
      <td className="flex-1 text-center px-2 ml-2 py-4 bg-gray-200 animate-pulse"></td> {/* Name */}
      <td className="flex-1 text-center px-2 ml-2 py-4 bg-gray-200 animate-pulse"></td> {/* Name */}
      
      <td className="flex-1 flex justify-center gap-2">
        <Trash className="text-gray-400 animate-pulse cursor-not-allowed"/>
        <PenSquare className="text-gray-400 animate-pulse cursor-not-allowed"/>
      </td>
    </tr>
        ))
      }
</>
     
    )
  }