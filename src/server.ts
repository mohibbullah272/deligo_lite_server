import {Server} from 'http'
import mongoose from 'mongoose';
import app from './app';
import dotenv from 'dotenv'
dotenv.config()
let server:Server;
const PORT = process.env.PORT || 10000;
   const HOST = '0.0.0.0';
const Main =async()=>{
try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3t5vk.mongodb.net/deligoDb?retryWrites=true&w=majority&appName=Cluster0`)
    console.log('db connected')

   server = app.listen(Number(PORT), HOST, () => {
     console.log(`🚀 Server running on http://${HOST}:${PORT}`);
   });
} catch (error) {
    console.log(error)
}
}

process.on('unhandledRejection',(err:any)=>{
    console.log('error detected server about to shuting down......',err)
if(server){
    server.close(()=>{
        process.exit(1)
    })
}
process.exit(1)
})
process.on('uncaughtException',(err:any)=>{
    console.log('error detected server about to shuting down......',err)
if(server){
    server.close(()=>{
        process.exit(1)
    })
}
process.exit(1)
})
process.on('SIGTERM',()=>{
    console.log(' server about to shuting down......')
if(server){
    server.close(()=>{
        process.exit(1)
    })
}
process.exit(1)
})

Main()