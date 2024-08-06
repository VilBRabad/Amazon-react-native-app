import mongoose from "mongoose";


const connectDB = async()=>{
   try{
      const connInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${process.env.DB_NAME}`);
      console.log("Database Connected !! DB Host: ", connInstance.connection.host);
   }
   catch(error){
      console.log("Error to connect database.!");
      process.exit(1);
   }   
}

export default connectDB;