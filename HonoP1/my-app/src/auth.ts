
export async function  authCheck(c:any , next:any){
        if(c.req.header("Authorization")){
        // Auth checks 
        await next()
    } else {
        return c.text("You dont have acesses")
    }
} 