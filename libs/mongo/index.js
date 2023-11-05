import mongoose from "mongoose";

const dbconnect = async () => {
    try{
        await mongoose.connect((process.env.MONGODB_URL),{
            dbName:"memo"
        });
        console.log('🎉접속성공🎉');
    }catch(error){
        console.log(error);
    }
}

export default dbconnect;