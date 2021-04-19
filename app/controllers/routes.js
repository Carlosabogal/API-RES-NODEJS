const express= require('express');
const CustomerController =require('../controllers/CustomerController')
const AccountController=require('../controllers/AccountController')
const router = express.Router();

router.delete('/customers/:id',CustomerController.delete);
router.put('/customers/:id',CustomerController.edit);
router.get('/customers/:id/accounts',AccountController.listAccountsByCustomer);
router.post('/accounts',AccountController.createAccount);
router.post('/customers',CustomerController.create);
router.delete('/accounts/:id',AccountController.deleteAccountById);
router.put('/accounts/retiro',AccountController.retiro);
router.put('/accounts/consignacion',AccountController.consignacion);
module.exports = router;