import { addPost, getPosts } from "@/app/lib/data"
import { NextResponse } from "next/server"

export const GET = async (req: Request, res: Response) =>{
    try{
      const posts = getPosts()
      return NextResponse.json({status: "OK", posts},{status:200})
    }catch(err) {
        return NextResponse.json({message: "Error",err},{ status:500})
    }

}

export const POST = async (req: Request, res: Response) => {
    const {title, desc } = await req.json(); 
   try{
    const post = {title,desc,date:new Date(),id:Date.now().toString()}
    addPost(post);
    return NextResponse.json({status: "OK", post},{status:201})
   }catch(err){
    return NextResponse.json({message: "Error",err},{ status:500})
   }
}
