import dbconnect from "@libs/mongo";
import Memo from "@schema/memos";
import { NextResponse } from "next/server";

export async function POST(req){
    const {title, contents} = await req.json();
    await dbconnect();
    console.log(title, contents);
    await Memo.create({
        title,
        contents
    });
    return NextResponse.json({message:"글을 입력했습니다."},{status:202});
}

//글읽기
export async function GET(){
    await dbconnect();
    const memos = await Memo.find();
    return NextResponse.json({memos});
}

//글 삭제
export async function DELETE(req, res){
    const {id} = req.params;
    console.log("삭제아이디"+id);
    await dbconnect();
    const rs = await Memo.findByIdAndDelete(id);
    return NextResponse.json({message:"삭제 완료"},{status:200});
}