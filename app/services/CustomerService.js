const CustomerService = module.exports
const CustomerRepository = require('../repositories/CustomerRepository')
const AccountRepository = require('../repositories/AccountsRepository')

CustomerService.create= async(customer)=>{

    const customerFound = await CustomerRepository.findById(customer.id)
    if(customerFound.length>0){

        throw new Error('Customer already exist')
    }

    await CustomerRepository.create(customer)
}

CustomerService.edit= async(id,customer)=>{

    const customerFound=await CustomerRepository.findById(id)

    if(customerFound.length==0){

        throw new Error('customer does not exist')

    }

    await CustomerRepository.edit(id,customer)
}

CustomerService.delete= async(idcustomer)=>{

    const customerAccounts = await AccountRepository.listAccountByCustomer(idcustomer)
    if(customerAccounts.length>0){

        throw new Error('customer with accounts, can not be deleted')

    }
    await CustomerRepository.delete(idcustomer)
}

CustomerService.findCustomer= async(idcustomer)=>{

    const customer=await CustomerRepository.findById(idcustomer)

    if(customer.length==0) return undefined;

    return customer[0];


}
