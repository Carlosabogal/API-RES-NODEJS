const AccountService = module.exports
const CustomerRepository = require('../repositories/CustomerRepository')
const AccountRepository = require('../repositories/AccountsRepository')



AccountService.listAccountByCustomer= async (customerid)=>{
 const customerFound =await CustomerRepository.findById(customerid)
 if(customerFound.length===0){
    throw new Error('Customer does not exist')
}

return AccountRepository.listAccountByCustomer(customerid)
}

AccountService.deleteAccountByid =async(id)=>{
    const accounts = await AccountRepository.findAccountById(id)
    console.log("La cuenta es "+ accounts[0].ammount + " y " + accounts[0].id);
    if(accounts.length===0){

        throw new Error('Account does not exist ')
    }
    
    if(accounts[0].ammount===0){
        AccountRepository.delete(id);
    } 
    else{

        throw new Error('El saldo de la cuenta es mayor a 0. Su saldo es ' + accounts[0].ammount)
    }


}
//
AccountService.retiro = async (id,retiro) =>{
    const accountFound = await AccountRepository.findAccountById(id)
    
    console.log("The id is "+ id + "El retiro es "+ retiro)
    if (accountFound.length ==0 ) {
        throw new Error('Account does not exist')
    }
   if(retiro>accountFound[0].ammount){

    throw new Error('No tiene saldo suficiente')
}
    var resta =accountFound[0].ammount-retiro
        console.log("The ammount is ",resta)
        accountFound[0].ammount=resta

    await AccountRepository.edit(id,accountFound[0])
}
AccountService.consignacion = async (id,consignacion) =>{
    const accountFound = await AccountRepository.findAccountById(id)
    
    console.log("The id is "+ id + "la consignacion es "+ consignacion)
    if (accountFound.length ==0 ) {
        throw new Error('Account does not exist')
    }

    var resta =accountFound[0].ammount+consignacion
        console.log("The ammount is ",resta)
        accountFound[0].ammount=resta

    await AccountRepository.edit(id,accountFound[0])
}

//


/*
AccountService.retiro=async(id,retiro)=>{
    const accounts= await AccountRepository.findAccountById(id)
    console.log("El id es " + id);
    console.log("El ammount es",retiro)
    if(accounts.length===0){
        throw new Error('Account does not exist')
    }
    if(accounts[0].ammount>=retiro){
        var cuenta = accounts[0];

        cuenta.ammount = accounts[0].ammount-retiro;
        console.log("El retiro es",JSON.stringify(cuenta));
        AccountRepository.edit(id,cuenta);

        return "Ok";

    }
    

}
*/
AccountService.create=async(account)=>{

    const customerFound= await CustomerRepository.findById(account.customerid)

    if(customerFound.length===0){

        throw new Error('customer does not exist')
    }

    const accountByCustomer = await AccountRepository.listAccountByCustomer(account.customerid)

    if(accountByCustomer.length>3){


        throw new Error('no more than 3 accounts...')
    }

    account.openedat = new Date();
    account.ammount =0;
    await AccountRepository.create(account)



}
/*
AccountService.consignacion=async(id,consignacion)=>{
    const accounts= await AccountRepository.findAccountById(id)
    console.log("El id es " + id);
    console.log("El ammount de la consignacion es",consignacion)
    if(accounts.length===0){
        throw new Error('Account does not exist')
    }
    if(accounts[0].ammount>=0){
        var cuenta = accounts[0];

        cuenta.ammount = accounts[0].ammount+consignacion;
        console.log("la consignacion es",JSON.stringify(cuenta));
        AccountRepository.edit(id,cuenta);

        return "Ok";

    }
    

}
*/