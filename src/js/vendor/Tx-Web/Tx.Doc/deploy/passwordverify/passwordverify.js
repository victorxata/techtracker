angular.module("baseApp.shared").directive("passwordVerify",function(){"use strict";return{require:"ngModel",link:function(a,b,c,d){a.$watchGroup([c.passwordVerify,function(){return d.$viewValue}],function(){d.$setValidity("passwordVerify",a.$eval(c.passwordVerify)===d.$viewValue)})}}});