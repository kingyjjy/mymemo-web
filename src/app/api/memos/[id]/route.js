import dbconnect from "@libs/mongo";
import Memo from "@schema/memos";
import { NextResponse } from "next/server";

//수정
export async function EDIT(req, res){
    const id = req.params.id;
    await dbconnect();
    const rs = await Memo.findByIdAndUpdate(id, req.body, {new:true});
    return NextResponse.json({message:'수정 성공'});
}