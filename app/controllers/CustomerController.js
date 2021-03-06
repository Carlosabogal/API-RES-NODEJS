const CustomerController = module.exports

const CustomerService = require('../services/CustomerService')


CustomerController.delete=async(req,res,next)=>{
    const params = req.params;

    try{
        
        await CustomerService.delete(params.id)

        res.send({message:'customer deleted'})

    }catch(error){
        console.log({error});

        res.status(500).send({error: error.message}).end()
        next(error);

    }
}
    

CustomerController.edit = async(req,res,next)=>{
        const params = req.params;
        const body = req.body;

        try{

            await CustomerService.edit(params.id,body)
            res.send({message:'cusomer update'})
        }

        catch(error){
            console.log({error});
            res.status(500).send({error: error.message}).end();
            next(error);


        }
    }

CustomerController.create = async(req,res,next)=>{
    const body=req.body;

    try{

        await CustomerService.create(body)
        res.send({message: 'customer created'})
    } catch(error){
        console.log({error});
        res.status(500).send({error: error.message}).end()
        next(error);

    }


    

}



        







    






