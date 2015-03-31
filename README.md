# okka
Validate JS object properties in a single line 

the module help to validate the object that contain some values such as email,password
the module has following feature
1. validates the object
2.can add the validation fns to the object
3.differnt datatypes such as email, password ,username ,string  etc

Eg: validator=require('validate')()


if (!lib.validate(data, {
    'uname': 'uname',
    'password': 'password'
})) return next(new errors.BadRequestError('Data is not valid'));


