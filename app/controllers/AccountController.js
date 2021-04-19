const AccountController = module.exports

const AccountService=require('../services/AccountService');

AccountController.listAccountsByCustomer =async (req,res,next)=>{
    const params = req.params;
    try{
        
        const response= await AccountService.listAccountByCustomer(params.id)

        res.send(response)
    }catch(error){
        console.log({error});

        res.status(500).send({error: error.message}).end();
        next(error);

    }


}

AccountController.deleteAccountById = async(req,res,next)=>{
    const params= req.params;

    try {

        const response =await AccountService.deleteAccountByid(params.id)
        res.send(response)
    }
    catch(error){

        console.error(error);
        //console.log({error});

        res.status(500).send({error: error.message}).end();
        next(error);



    }




}
AccountController.createAccount = async(req,res,next)=>{
    const body=req.body;

    try{

        await AccountService.create(body)
        res.send({message: 'account created'})
    } catch(error){
        console.log({error});
        res.status(500).send({error: error.message}).end()
        next(error);

    }

}
/*AccountController.retiro=async(req,res,next)=>{
    const body =req.body;
    try{
        if(await AccountService.retiro(body.id, body.retiro)==="Ok")
        res.send({message:' retiro completado'})
        else
        res.send({message:' No se pudo realizar el retiro'})
    }catch(error){
        console.log({error});
        res.status(500).send({error: error.message}).end()
        next(error);

    }



}*/


AccountController.retiro=async(req,res,next)=>{
    
    const body =req.body;
    console.log("El body es "+ body +"El id es" +body.id +"El retiro es " + body.retiro)
    try{
        await AccountService.retiro(body.id,body.retiro)
      
    }catch(error){
        console.log({error});
        res.status(500).send({error: error.message}).end()
        next(error);

    }


}

AccountController.consignacion=async(req,res,next)=>{
    
    const body =req.body;
    console.log("El body es "+ body +"El id es" +body.id +"El retiro es " + body.consignacion)
    try{
        await AccountService.consignacion(body.id,body.consignacion)
      
    }catch(error){
        console.log({error});
        res.status(500).send({error: error.message}).end()
        next(error);

    }


}



