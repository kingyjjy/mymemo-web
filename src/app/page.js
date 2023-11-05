import Link from "next/link"
import dynamic from "next/dynamic"
import { FcIdea,FcFullTrash,FcLeft } from "react-icons/fc";
import {PiPencilLineDuotone} from "react-icons/pi"
import { list } from "postcss";

const getMemo = async()=>{
  try{
    const res = await fetch("http://localhost:3000/api/memos",{
      cache:"no-store"
    })
    if(!res.ok){
      throw new Error('다운로드 실패');
    }
    return res.json();
  }catch(error){
    console.log(error);
  }
}

const Home = async() => {
  const {memos} = await getMemo();
  console.log(memos);
  return (
    <div>
      <div className="grid grid-cols-1 my-5">
        <h1 className="text-center mb-5 font-semibold text-gray-600">My Memo App</h1>
        <div className=" border border-yellow-400 rounded-lg bg-yellow-200 mt-5 pt-3 pr-3 pb-5 shadow-2xl w-1/2 m-auto">
          <div className="flex justify-end">
            <Link href="write" className="border border-yellow-500 w-20 text-center flex justify-center font-medium rounded-full text-3xl"><PiPencilLineDuotone/></Link>
          </div>
          <ul className="list-group ">
            {/* loop */}
            {
              memos.map((rs, index)=>{
                const dt = new Date(rs.date);
                const date = `(${dt.getFullYear()}.${dt.getMonth()-1}.${dt.getDate()})`;
                return(
                  <li key={index} className="list-group-item p-4 ml-2 border-b border-dashed border-yellow-600">
                    <h3 className="flex justify-start text-2xl "><FcIdea className="mr-2 text-4xl"/>{rs.title} <small className="ml-2">{date}</small></h3>
                    <p className="ml-3 pt-8">{rs.contents}</p>
                    <div className="flex justify-end mt-4">
                      <Link href='#' className="border border-yellow-500 rounded-full text-4xl"><FcLeft/></Link>
                      <button className="border border-red-500 ms-3 rounded-full text-4xl"><FcFullTrash/></button>
                    </div>
                  </li>   
                )
              })
            }
           
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home