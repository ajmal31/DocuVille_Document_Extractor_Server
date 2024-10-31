export const errorHandler=(err,req,res,next)=>{
    if(err){
        res.status(500).send("Something Went Wrong")
    }
}