const AccountRepository = module.exports
const DB=require('../config/database')

AccountRepository.create = (account)=>{

    return DB('accounts').insert(account)
}

AccountRepository.listAccountByCustomer = (customerid)=>{

    return DB('accounts').where({customerid:customerid}).select('*')
}
AccountRepository.findAccountById=(accountid)=>{
    return DB('accounts').where({id:accountid}).select('*')
    
}
AccountRepository.delete = (accountid)=>{

    return DB('accounts').where({id:accountid}).del();
}

AccountRepository.edit = (accountid,cuenta)=>{
    //console.log("la cuenta es " + JSON.stringify(cuenta));    
    console.log("la cuenta es " +cuenta)
    return DB('accounts').where({id:accountid}).update(cuenta);

}