"use strict";(self.webpackChunkrexcoders_portal=self.webpackChunkrexcoders_portal||[]).push([[306],{6306:(Y,g,l)=>{l.r(g),l.d(g,{AuthModule:()=>Q});var a=l(6895),u=l(4931),m=l(1192),t=l(8256),i=l(433);function p(o,r){1&o&&(t.TgZ(0,"p",16),t._uU(1," Please Enter Your Valid Email Address "),t.qZA())}function f(o,r){1&o&&(t.TgZ(0,"p",16),t._uU(1," Please Enter Your Email Address "),t.qZA())}function _(o,r){if(1&o){const e=t.EpF();t.ynx(0),t.TgZ(1,"form",5,6),t.NdJ("submit",function(){t.CHM(e);const s=t.MAs(2),d=t.oxw();return t.KtG(d.getForgotFormData(s))}),t.TgZ(3,"div",7)(4,"div",8)(5,"div",9)(6,"div",10)(7,"h4"),t._uU(8,"Forgot Password"),t.qZA()(),t.TgZ(9,"div",11)(10,"label"),t._uU(11,"Email"),t.qZA(),t._UZ(12,"input",12,13),t.YNc(14,p,2,0,"p",14),t.YNc(15,f,2,0,"p",14),t.qZA(),t.TgZ(16,"div",11)(17,"button",15),t._uU(18,"Send Verification Link"),t.qZA()()()()()(),t.BQk()}if(2&o){const e=t.MAs(2),n=t.MAs(13);t.xp6(14),t.Q6J("ngIf",(null==n.errors?null:n.errors.email)&&n.touched),t.xp6(1),t.Q6J("ngIf",(null==n.errors?null:n.errors.required)&&(n.touched||n.dirty)),t.xp6(2),t.Q6J("disabled",e.invalid)}}function h(o,r){1&o&&(t.ynx(0),t._UZ(1,"img",17),t.TgZ(2,"p",18),t._uU(3,"Verify your email address"),t.qZA(),t.TgZ(4,"p",19),t._uU(5,"You've entered "),t.TgZ(6,"strong"),t._uU(7,"aaa@bbb.com"),t.qZA(),t._uU(8,"as the email address for your account."),t.qZA(),t.TgZ(9,"p",20),t._uU(10,"Please verify this email address by clicking button below"),t.qZA(),t.TgZ(11,"button",21),t._uU(12,"Verify your email"),t.qZA(),t.BQk())}let v=(()=>{class o{constructor(){this.formData={userEmail:""},this.toggleForgotPasswordForm=!0}ngOnInit(){}getForgotFormData(e){this.toggleForgotPasswordForm=!1}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-forgot-password"]],decls:6,vars:2,consts:[[1,"login-section"],[1,"container"],[1,"row","justify-content-center"],[1,"col-xl-7","col-lg-8","col-md-12","col-sm-12"],[4,"ngIf"],[3,"submit"],["forgotPasswordControls","ngForm"],[1,"crs_log_wrap"],[1,"crs_log__caption"],[1,"rcs_log_124"],[1,"Lpo09"],[1,"form-group"],["type","text","placeholder","Enter Your Email Address","ngModel","","name","userEmail","email","","required","",1,"form-control"],["userEmail","ngModel"],["class","alert-msg",4,"ngIf"],["type","submit",1,"btn","full-width","btn-md","theme-bg","text-white",3,"disabled"],[1,"alert-msg"],["src","assets/img/email-img.jpg","alt","",1,"email-img"],[1,"verify-email-addr"],[1,"your-email-addr"],[1,"email-addr-clicking-btn"],[1,"btn","half-width","btn-xs","theme-bg","text-white","verify-email-btn"]],template:function(e,n){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,_,19,3,"ng-container",4),t.YNc(5,h,13,0,"ng-container",4),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("ngIf",n.toggleForgotPasswordForm),t.xp6(1),t.Q6J("ngIf",!n.toggleForgotPasswordForm))},dependencies:[a.O5,i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.on,i.On,i.F],styles:[".alert-msg[_ngcontent-%COMP%]{color:red}.email-img[_ngcontent-%COMP%]{width:150px;margin-left:250px}.verify-email-addr[_ngcontent-%COMP%]{font-weight:700;font-size:27px;text-align:center;color:#2d2b2b;font-family:sans-serif}.your-email-addr[_ngcontent-%COMP%]{text-align:center;font-family:sans-serif;font-size:19px}.email-addr-clicking-btn[_ngcontent-%COMP%]{text-align:center;font-size:19px;font-family:sans-serif}.verify-email-btn[_ngcontent-%COMP%]{margin-left:240px;margin-top:20px}"]}),o})();var b=l(5226),c=l.n(b),Z=l(7579),y=l(2722),A=l(629),C=l(1481);function T(o,r){1&o&&(t.TgZ(0,"span"),t._uU(1,"Email or Mobile number is required."),t.qZA())}function x(o,r){if(1&o&&(t.TgZ(0,"div",12),t.YNc(1,T,2,0,"span",13),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.loginControls.username.errors?null:e.loginControls.username.errors.required)}}function w(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Password is required. "),t.qZA())}function F(o,r){1&o&&(t.TgZ(0,"div"),t._uU(1," Password should be minimum 6 character. "),t.qZA())}function U(o,r){if(1&o&&(t.TgZ(0,"div",12),t.YNc(1,w,2,0,"div",13),t.YNc(2,F,2,0,"div",13),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.loginControls.password.errors?null:e.loginControls.password.errors.required),t.xp6(1),t.Q6J("ngIf",null==e.loginControls.password.errors?null:e.loginControls.password.errors.minlength)}}let P=(()=>{class o{constructor(e,n,s,d){this.loginFormBuilder=e,this._authservice=n,this._cookiesService=s,this._router=d,this.destroy$=new Z.x}get loginControls(){return this.loginForm.controls}ngOnInit(){this.loginForm=this.loginFormBuilder.group({username:[null,[i.kI.required]],password:[null,[i.kI.required,i.kI.minLength(6)]],userType:[null]})}ngOnDestroy(){this.destroy$.next(!0),this.destroy$.complete()}loginSubmit(){this.loginForm.valid&&(this.loginForm.patchValue({userType:this.userRole}),this._authservice.authenticateUser(this.loginForm.value).pipe((0,y.R)(this.destroy$)).subscribe({next:e=>{this.responsedata=e.data,c().fire("Hi "+this.responsedata?.details?.name+", Welcome to Rexcoders"),this.loginForm.reset(),this._cookiesService.setAuthCookies(this.responsedata,this.userRole),this._router.navigate(["/student"])},error:e=>{console.log(e),c().fire("Invalid User"),console.log(e)}}))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(i.qu),t.Y36(A.e),t.Y36(C.F),t.Y36(u.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],inputs:{userRole:"userRole"},decls:25,vars:3,consts:[[3,"formGroup","ngSubmit"],[1,"rcs_log_124"],[1,"form-group"],["type","text","placeholder","Email Id/Mobile Number","formControlName","username",1,"form-control"],["class","text-danger",4,"ngIf"],["type","password","placeholder","Password","formControlName","password",1,"form-control"],["type","submit",1,"btn","full-width","btn-md","theme-bg","text-white"],[1,"crs_log__footer","d-flex","justify-content-between"],[1,"fhg_45"],[1,"musrt"],["href","signup.html",1,"theme-cl"],["href","forgot.html",1,"text-danger"],[1,"text-danger"],[4,"ngIf"]],template:function(e,n){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.loginSubmit()}),t.TgZ(1,"div",1)(2,"div",2)(3,"label"),t._uU(4,"Email/Mobile"),t.qZA(),t._UZ(5,"input",3),t.YNc(6,x,2,1,"div",4),t.qZA(),t.TgZ(7,"div",2)(8,"label"),t._uU(9,"Password"),t.qZA(),t._UZ(10,"input",5),t.qZA(),t.YNc(11,U,3,2,"div",4),t.TgZ(12,"div",2)(13,"button",6),t._uU(14," Login "),t.qZA()()(),t.TgZ(15,"div",7)(16,"div",8)(17,"p",9),t._uU(18," Don't have account? "),t.TgZ(19,"a",10),t._uU(20,"SignUp"),t.qZA()()(),t.TgZ(21,"div",8)(22,"p",9)(23,"a",11),t._uU(24,"Forgot Password?"),t.qZA()()()()()),2&e&&(t.Q6J("formGroup",n.loginForm),t.xp6(6),t.Q6J("ngIf",n.loginControls.username.touched&&n.loginControls.username.invalid),t.xp6(5),t.Q6J("ngIf",n.loginControls.password.touched&&n.loginControls.password.invalid))},dependencies:[a.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u],styles:[".login-section[_ngcontent-%COMP%]{padding:50px 0;position:relative}"]}),o})();const q=["student"],M=["staff"],J=["admin"],k=[{path:"",component:(()=>{class o{constructor(){this.userType="Student"}ngOnInit(){}getUserType(e){this.userType=e}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-auth"]],viewQuery:function(e,n){if(1&e&&(t.Gf(q,5),t.Gf(M,5),t.Gf(J,5)),2&e){let s;t.iGM(s=t.CRH())&&(n.student=s.first),t.iGM(s=t.CRH())&&(n.staff=s.first),t.iGM(s=t.CRH())&&(n.admin=s.first)}},decls:35,vars:3,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-xl-7","col-lg-8","col-md-12","col-sm-12"],[1,"crs_log_wrap"],[1,"crs_log__thumb"],["src","assets/img/banner-2.jpg","alt","",1,"img-fluid"],[1,"crs_log__caption"],[1,"rcs_log_123"],[1,"rcs_ico"],[1,"fas","fa-lock"],[1,"rcs_log_124"],[1,"Lpo09"],["id","pills-tab","role","tablist",1,"nav","nav-pills","mb-3","login-tab"],[1,"nav-item"],["data-toggle","pill","data-target","#student","type","button","role","tab","aria-controls","pills-home","aria-selected","true",1,"nav-link","active","login-tab-button",3,"click"],["student",""],["data-toggle","pill","data-target","#staff","type","button","role","tab","aria-controls","pills-home","aria-selected","true",1,"nav-link","login-tab-button",3,"click"],["staff",""],["data-toggle","pill","data-target","#admin","type","button","role","tab","aria-controls","pills-home","aria-selected","true",1,"nav-link","login-tab-button",3,"click"],["admin",""],[1,"tab-content"],["id","student",1,"tab-pane","fade","show","active"],[3,"userRole"],["id","staff",1,"tab-pane","fade"],["id","admin",1,"tab-pane","fade"]],template:function(e,n){1&e&&(t.TgZ(0,"section")(1,"div",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4),t._UZ(6,"img",5),t.qZA(),t.TgZ(7,"div",6)(8,"div",7)(9,"div",8),t._UZ(10,"i",9),t.qZA()(),t.TgZ(11,"div",10)(12,"div",11)(13,"h4"),t._uU(14,"Login Your Account"),t.qZA()(),t.TgZ(15,"ul",12)(16,"li",13)(17,"button",14,15),t.NdJ("click",function(){return n.getUserType("Student")}),t._uU(19," Student "),t.qZA()(),t.TgZ(20,"li")(21,"button",16,17),t.NdJ("click",function(){return n.getUserType("Staff")}),t._uU(23," Staff "),t.qZA()(),t.TgZ(24,"li")(25,"button",18,19),t.NdJ("click",function(){return n.getUserType("Admin")}),t._uU(27," Admin "),t.qZA()()(),t.TgZ(28,"div",20)(29,"div",21),t._UZ(30,"app-login",22),t.qZA(),t.TgZ(31,"div",23),t._UZ(32,"app-login",22),t.qZA(),t.TgZ(33,"div",24),t._UZ(34,"app-login",22),t.qZA()()()()()()()()()),2&e&&(t.xp6(30),t.Q6J("userRole",n.userType),t.xp6(2),t.Q6J("userRole",n.userType),t.xp6(2),t.Q6J("userRole",n.userType))},dependencies:[P],styles:[".login-tab-button[_ngcontent-%COMP%]{border:0px;background-color:#fff}button[_ngcontent-%COMP%]:focus{outline:0px;border:0px;background-color:#fff}.login-tab[_ngcontent-%COMP%]{gap:5rem;margin-left:5rem}.login-bottem[_ngcontent-%COMP%]{padding-bottom:0rem}"]}),o})()},{path:"forgot",component:v},{path:"card",component:m.Q}];let I=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(k),u.Bz]}),o})(),Q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[a.ez,I,i.u5,i.UX]}),o})()}}]);