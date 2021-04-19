const ClienteRepository = require('./app/repositories/CustomerRepository')
const AccountRepository = require('./app/repositories/AccountsRepository')
const CustomerService = require('./app/services/CustomerService')
const AccountService = require('./app/services/AccountService')

//console.log('probando....')
ClienteRepository.create({
    name:'carls',
    lastname:'sabogal',
    id:'221',
    email:'carlos@juaen.com'
}).then(console.log)

/*
async function probandoElBuscar(){
    const cliente = await ClienteRepository.findById('4321')
    console.log(cliente)
}

probandoElBuscar().then(console.log('ok'))
async function probandoElEditar(){

    await ClienteRepository.edit('4321',{
        name:'jose',
        lastname:'perez'


    })
 
}
probandoElEditar()
.then(console.log('ok'))

async function probandoEliminar(){

    await ClienteRepository.delete('4321')
}
probandoEliminar()
.then(console.log('ok'))

async function probandolistarCuentas(){
    const list= await AccountRepository.listAccountByCustomer('1')

    console.log(list)
}

probandolistarCuentas()
.then(console.log('ok'))
async function probarCrearCliente(){    
    await CustomerService .create({

        id:'2345',
        lastname:'baca',
        name:'fabian',
        email:'fabian@gmail.com'

        })
}
probarCrearCliente().then(console.log('ok'))

async function probarEditar(){
    await CustomerService.edit('32345',{
        lastname:'quitian',
        name:'obdulio'


    })
    

}
probarEditar().then(console.log('ok'))

async function probarEliminar(){

    await CustomerService.delete('231')


}

probarEliminar().then(console.log('ok'))



async function probarBuscar(){

    const customer = await CustomerService.findCustomer('1')
    console.log(customer)

}

probarBuscar().then(console.log('ok'))

async function probar() {
    const result =await AccountService.listAccountByCustomer('41')
    console.log(result)    
}
probar().then(console.log('ok'))
async function probar() {
    const result =await AccountService.create({
        id:'4363',
        customerid:'1',

    })
    console.log(result)    
}
probar().then(console.log('ok'))
*/