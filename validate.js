//Validation module
//the module help to validate the object that contain some values such as email,password
//the module has following feature
//1. validates the object
//2.can add the validation fns to the object
//3.differnt datatypes such as email, password ,username ,string  etc
//
//Eg: validator=require('validate')()
//validate



//var lib =require('/lib')

var regexMap = {
	'email': /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
	'password': /^[ÆØÅæøåA-Za-z0-9!@#$%^&*()_]{6,42}$/,
	'uname': /((?=.*[a-zA-Z]).{6,42})/,
	'city': /^[[ÆØÅæøåa-zA-Z\- ]+$/,
    'zip':/^\d{4}$/,
	'cvr': /^\d{8}$/,
	'phone': /^\d{8}$/,
	'website': /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
	'time': '/^([01]\d|2[0-3]|\d):?([0-5]\d)$/',
}

var isEmail = function(email) {
	if (typeof email !== 'string') return false;
	return regexMap.email.test(email);
}

//lib.validate.isEmail(email)


var isWebsite = function(website) {
	if (typeof website !== 'string') return false;
	return regexMap.website.test(website);
}


var isPassword = function(password) {

	//console.log(typeof password !== 'string');
	if (typeof password !== 'string') return false;
	return regexMap.password.test(password.toLowerCase());
}

var isUName = function(uname) {
	if (typeof uname !== 'string') return false;
	return regexMap.uname.test(uname);
}

var isString = function(str) {
	return (typeof str === 'string' && str !== '');
}

var isArray = function(_in) {
	return (_in)
}

var isObject = function(uname) {
	return (typeof uname !== 'string');
}

var isNumber=function (num) {
	if (typeof num === 'undefined') return false;
	return regexMap.uname.test(uname.toLowerCase());
}

var isZip = function (zip) {
	// body...

	if (typeof num === 'undefined') return false;
	return regexMap.uname.test(uname.toLowerCase());

}
var isCVR = function (cvr) {
	return 
}



var isEmpty = function(o) {
	var empty = true;
	for (k in o) {
		empty = false;
		break
	}
	return empty
}

var fns = {
	'email': isEmail,
	'password':isPassword,
	'uname':isUName,
	'string':isString,
	'array':Array.isArray,
	'resetPasswordToken': String,
    'resetPasswordExpires': Date,
    'website':isWebsite
}

// function checkInner(data,key,keyArray,type){
// 	dataObject = data;
// 	keyArray.for
// 	f
// 	or(var i=0;i<keyArray.length;i++){
// 		 dataObject = dataObject[ keyArray[0]];

// 	}
// }

var validator=function(){
	var _self=this;
	_self.fns=fns;
	
	_self.validate = function(data, option) {

		if (typeof data === 'object' && data !== null && typeof option === 'object') {

			for (var key in option) {

				if (typeof data[key] === 'undefined') return false;
				if (!validate(data[key], option[key])) return false;
			}
			return true;
		} else if (typeof option === 'string') {
			if (typeof _self.fns[option] !== 'function'){ return false;}
			return  _self.fns[option](data) ;
		}
	}

	_self.validate.add=function(key,fn){
			_self.fns[key]=fn;
	}

	_self.validate.isEmail=isEmail;
	_self.validate.isEmpty = isEmpty;
	_self.validate.isWebsite = isWebsite;

	return validate;
}
module.exports = validator;