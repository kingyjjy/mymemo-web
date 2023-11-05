import React,{useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Edit = () => {
  return (
    <form className="mt-5" onSubmit={handleSubmit}>
            <h1 className="text-center mb-4 font-bold">My Memo App</h1>
            <div className="mt-2 mb-3 flex justify-end">
                <Link href="/" className="text-3xl bg-yellow-200"><FcViewDetails/></Link>
            </div>
            <div className="form-group mb-5">
                <label htmlFor="title" className="font-semibold mb-2">제목</label>
                <input type="text" id="title" className="mt-3 w-full border rounded-md p-3" placeholder="제목을 입력하세요." onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </div>
            <div className="form-group mb-5">
                <label htmlFor="contents" className="font-semibold mb-2">내용</label>
                <textarea id="contents" rows="5" className="mt-3 border rounded-md p-3 w-full" placeholder="내용을 입력하세요." onChange={(e)=>setContentes(e.target.value)}>{contents}</textarea>
            </div>
            <div className="text-center">
                <button type="reset" className="border border-red-500 rounded-md mx-3 py-1 px-4">취소</button>
                <button type="submit" className="border border-yellow-500 mx-3 rounded-md py-1 px-4">전송</button>
            </div>
        </form>
  )
}

export default Edit