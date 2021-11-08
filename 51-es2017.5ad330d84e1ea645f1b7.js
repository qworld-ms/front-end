(self.webpackChunkquess_microservice=self.webpackChunkquess_microservice||[]).push([[51],{3051:function(e,t,r){"use strict";r.r(t),r.d(t,{UserManagementModule:function(){return H}});var i=r(8583),s=r(4655),o=r(3679),a=r(7716),n=r(6643),l=r(7929),c=r(9966),u=r(9344),m=r(9231);let d=(()=>{class e{constructor(e,t,r,i,s,o,a){this.formBuilder=e,this.router=t,this.httpService=r,this.apiService=i,this.stateService=s,this.datePipe=o,this.toastr=a,this.buildForm()}ngOnInit(){}submitBusinessEntityData(){let{businessEntityName:e}=this.createUserForm.value,t={businessName:e,businessDesc:"",businessDetails:""};console.log(this.createUserForm.value),this.commonApiCall(`${this.apiService.apiList.userManagement.save}`,"postMethod",t,"dataSubmitted",{},!1)}get f(){return this.createUserForm.controls}dataSubmitted(e){this.toastr.success("Submitted data save","Success")}buildForm(){this.createUserForm=this.formBuilder.group({userName:["",o.kI.required],userEmailId:["",o.kI.required],userGroup:["",o.kI.required]})}commonApiCall(e,t,r,i,s,o=!1){this.stateService.addCalledApi(e),this.httpService[t](e,o,r).subscribe(e=>{this[i](e,s)},t=>{var r;(null===(r=t.error)||void 0===r?void 0:r.error)&&"string"==typeof t.error.error&&this.toastr.error("err.error.error","Error"),this.stateService.removeCalledApi(e)},()=>{this.stateService.removeCalledApi(e)})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(o.qu),a.Y36(s.F0),a.Y36(n.O),a.Y36(l.s),a.Y36(c.b),a.Y36(i.uU),a.Y36(u._W))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-create-user-management"]],decls:37,vars:5,consts:[[1,"card","p-4"],[1,"card-header"],[1,"card-body"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col-md-4"],["for","userName",1,"form-label-16"],["type","text","id","userName","placeholder","User Name","formControlName","userName",1,"form-control"],[3,"control"],[1,"col-md-4"],["for","userEmailId",1,"form-label-16"],["type","text","id","userEmailId","placeholder","User Email ID","formControlName","businessEntityAdmin",1,"form-control"],["for","userGroup",1,"form-label-16"],["type","email","id","userGroup","placeholder","Select role group for the user","formControlName","userGroup","email","true",1,"form-control"],["type","button",1,"btn","btn-outline-secondary",3,"click"],["type","submit",1,"btn","btn-primary","ml-4",3,"disabled"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a._uU(2," Create a new user "),a.qZA(),a.TgZ(3,"div",2),a.TgZ(4,"form",3),a.NdJ("ngSubmit",function(){return t.submitBusinessEntityData()}),a.TgZ(5,"div",4),a.TgZ(6,"div",5),a.TgZ(7,"label",6),a._uU(8,"User Name"),a.qZA(),a._UZ(9,"input",7),a._UZ(10,"app-control-messages",8),a.qZA(),a._UZ(11,"div",9),a._UZ(12,"div",9),a.qZA(),a.TgZ(13,"div",4),a.TgZ(14,"div",5),a.TgZ(15,"label",10),a._uU(16,"User Email ID"),a.qZA(),a._UZ(17,"input",11),a._UZ(18,"app-control-messages",8),a.qZA(),a._UZ(19,"div",9),a._UZ(20,"div",9),a.qZA(),a.TgZ(21,"div",4),a.TgZ(22,"div",5),a.TgZ(23,"label",12),a._uU(24,"Select role group for the user"),a.qZA(),a._UZ(25,"input",13),a._UZ(26,"app-control-messages",8),a.qZA(),a._UZ(27,"div",9),a._UZ(28,"div",9),a.qZA(),a.TgZ(29,"div",4),a.TgZ(30,"div",5),a.TgZ(31,"button",14),a.NdJ("click",function(){return t.createUserForm.reset()}),a._uU(32,"Discard"),a.qZA(),a.TgZ(33,"button",15),a._uU(34,"Save"),a.qZA(),a.qZA(),a._UZ(35,"div",9),a._UZ(36,"div",9),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(4),a.Q6J("formGroup",t.createUserForm),a.xp6(6),a.Q6J("control",t.f.userName),a.xp6(8),a.Q6J("control",t.f.userEmailId),a.xp6(8),a.Q6J("control",t.f.userGroup),a.xp6(7),a.Q6J("disabled",t.createUserForm.invalid))},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,m.w,o.on],styles:[""]}),e})();var p=r(9517);let Z=(()=>{class e{constructor(e,t,r,i,s,o,a){this.formBuilder=e,this.router=t,this.httpService=r,this.apiService=i,this.stateService=s,this.datePipe=o,this.toastr=a,this.buildForm()}ngOnInit(){}submitBusinessEntityData(){let{businessEntityName:e}=this.editUserForm.value,t={businessName:e,businessDesc:"",businessDetails:""};console.log(this.editUserForm.value),this.commonApiCall(`${this.apiService.apiList.userManagement.save}`,"postMethod",t,"dataSubmitted",{},!1)}get f(){return this.editUserForm.controls}dataSubmitted(e){this.toastr.success("Submitted data save","Success")}buildForm(){this.editUserForm=this.formBuilder.group({userName:["",o.kI.required],userEmailId:["",o.kI.required],userGroup:["",o.kI.required],isActive:["N",o.kI.required],lastLoginDate:["",o.kI.required]})}commonApiCall(e,t,r,i,s,o=!1){this.stateService.addCalledApi(e),this.httpService[t](e,o,r).subscribe(e=>{this[i](e,s)},t=>{var r;(null===(r=t.error)||void 0===r?void 0:r.error)&&"string"==typeof t.error.error&&this.toastr.error("err.error.error","Error"),this.stateService.removeCalledApi(e)},()=>{this.stateService.removeCalledApi(e)})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(o.qu),a.Y36(s.F0),a.Y36(n.O),a.Y36(l.s),a.Y36(c.b),a.Y36(i.uU),a.Y36(u._W))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-edit-user-management"]],decls:76,vars:10,consts:[[1,"card","p-4"],[1,"card-header"],[1,"card-body"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col-md-4"],["for","userName",1,"form-label-16"],["type","text","id","userName","placeholder","User Name","formControlName","userName",1,"form-control"],[3,"control"],[1,"col-md-4"],["for","userEmailId",1,"form-label-16"],["type","text","id","userEmailId","placeholder","User Email ID","formControlName","businessEntityAdmin",1,"form-control"],["for","userGroup",1,"form-label-16"],["type","email","id","userGroup","placeholder","Select role group for the user","formControlName","userGroup","email","true",1,"form-control"],[1,"col-md-2"],[1,"col-md-2","text-right"],["ngbRadioGroup","","name","radioBasic","formControlName","isActive",1,"btn-group","btn-group-toggle"],["ngbButtonLabel","",1,"btn-primary"],["ngbButton","","type","radio","value","Y"],["ngbButton","","type","radio","value","N"],["for","lastLoginDate",1,"form-label-16"],["type","email","id","lastLoginDate","placeholder","Last Login Date","formControlName","lastLoginDate","email","true",1,"form-control"],[1,"ml-2"],["href","javascript:void(0)"],[1,"form-row","mt-2"],[1,"col-md-5"],[1,"col-md-3"],[1,"form-row","mt-4"],["type","button",1,"btn","btn-outline-secondary",3,"click"],["type","submit",1,"btn","btn-primary","ml-4",3,"disabled"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a._uU(2," Edit User "),a.qZA(),a.TgZ(3,"div",2),a.TgZ(4,"form",3),a.NdJ("ngSubmit",function(){return t.submitBusinessEntityData()}),a.TgZ(5,"div",4),a.TgZ(6,"div",5),a.TgZ(7,"label",6),a._uU(8,"User Name"),a.qZA(),a._UZ(9,"input",7),a._UZ(10,"app-control-messages",8),a.qZA(),a._UZ(11,"div",9),a._UZ(12,"div",9),a.qZA(),a.TgZ(13,"div",4),a.TgZ(14,"div",5),a.TgZ(15,"label",10),a._uU(16,"User Email ID"),a.qZA(),a._UZ(17,"input",11),a._UZ(18,"app-control-messages",8),a.qZA(),a._UZ(19,"div",9),a._UZ(20,"div",9),a.qZA(),a.TgZ(21,"div",4),a.TgZ(22,"div",5),a.TgZ(23,"label",12),a._uU(24,"Select role group for the user"),a.qZA(),a._UZ(25,"input",13),a._UZ(26,"app-control-messages",8),a.qZA(),a._UZ(27,"div",9),a._UZ(28,"div",9),a.qZA(),a.TgZ(29,"div",4),a.TgZ(30,"div",14),a._uU(31," Is the User active?* "),a.qZA(),a.TgZ(32,"div",15),a.TgZ(33,"div",16),a.TgZ(34,"label",17),a._UZ(35,"input",18),a._uU(36,"Yes "),a.qZA(),a.TgZ(37,"label",17),a._UZ(38,"input",19),a._uU(39," No "),a.qZA(),a.qZA(),a.qZA(),a._UZ(40,"div",9),a._UZ(41,"div",9),a.qZA(),a.TgZ(42,"div",4),a.TgZ(43,"div",5),a.TgZ(44,"label",20),a._uU(45,"Last Login Date"),a.qZA(),a._UZ(46,"input",21),a._UZ(47,"app-control-messages",8),a.qZA(),a._UZ(48,"div",9),a._UZ(49,"div",9),a.qZA(),a.TgZ(50,"div",4),a.TgZ(51,"div",9),a.TgZ(52,"span"),a._uU(53,"Do you want to reset Password for the user?"),a.qZA(),a.TgZ(54,"span",22),a.TgZ(55,"a",23),a._uU(56,"Reset Password"),a.qZA(),a.qZA(),a.qZA(),a._UZ(57,"div",9),a._UZ(58,"div",9),a.qZA(),a.TgZ(59,"div",24),a.TgZ(60,"div",25),a.TgZ(61,"span"),a._uU(62,"Do you want to Resend invitation for the user?"),a.qZA(),a.TgZ(63,"span",22),a.TgZ(64,"a",23),a._uU(65,"Resend Invitation"),a.qZA(),a.qZA(),a.qZA(),a._UZ(66,"div",26),a._UZ(67,"div",9),a.qZA(),a.TgZ(68,"div",27),a.TgZ(69,"div",5),a.TgZ(70,"button",28),a.NdJ("click",function(){return t.editUserForm.reset()}),a._uU(71,"Discard"),a.qZA(),a.TgZ(72,"button",29),a._uU(73,"Save"),a.qZA(),a.qZA(),a._UZ(74,"div",9),a._UZ(75,"div",9),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(4),a.Q6J("formGroup",t.editUserForm),a.xp6(6),a.Q6J("control",t.f.userName),a.xp6(8),a.Q6J("control",t.f.userEmailId),a.xp6(8),a.Q6J("control",t.f.userGroup),a.xp6(8),a.ekj("radio-active","Y"!==t.editUserForm.value.isActive),a.xp6(3),a.ekj("radio-active","N"!==t.editUserForm.value.isActive),a.xp6(10),a.Q6J("control",t.f.lastLoginDate),a.xp6(25),a.Q6J("disabled",t.editUserForm.invalid))},directives:[o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,m.w,o.on,p.py,p.mL,p.aB],styles:[".radio-active[_ngcontent-%COMP%]{background:#f8fcfded;color:#000;border:1px solid #f8fcfded}"]}),e})();var g=r(2091);function f(e,t){1&e&&(a.TgZ(0,"th",20),a._uU(1,"Product"),a.qZA())}function v(e,t){if(1&e&&(a.TgZ(0,"td",21),a._uU(1),a.qZA()),2&e){const e=t.$implicit;a.xp6(1),a.hij(" ",null==e?null:e.product," ")}}function h(e,t){1&e&&(a.TgZ(0,"th",20),a._uU(1," Service name "),a.qZA())}function U(e,t){if(1&e&&(a.TgZ(0,"td",21),a._uU(1),a.qZA()),2&e){const e=t.$implicit;a.xp6(1),a.hij(" ",null==e?null:e.serviceName," ")}}function A(e,t){1&e&&(a.TgZ(0,"th",20),a._uU(1," User Type "),a.qZA())}function T(e,t){if(1&e&&(a.TgZ(0,"td",21),a._uU(1),a.qZA()),2&e){const e=t.$implicit;a.xp6(1),a.hij(" ",null==e?null:e.uerType," ")}}function q(e,t){1&e&&a._UZ(0,"tr",22)}function _(e,t){1&e&&a._UZ(0,"tr",23)}function b(e,t){if(1&e&&(a.TgZ(0,"table",12),a.ynx(1,13),a.YNc(2,f,2,0,"th",14),a.YNc(3,v,2,1,"td",15),a.BQk(),a.ynx(4,16),a.YNc(5,h,2,0,"th",14),a.YNc(6,U,2,1,"td",15),a.BQk(),a.ynx(7,17),a.YNc(8,A,2,0,"th",14),a.YNc(9,T,2,1,"td",15),a.BQk(),a.YNc(10,q,1,0,"tr",18),a.YNc(11,_,1,0,"tr",19),a.qZA()),2&e){const e=a.oxw();a.Q6J("dataSource",e.dataSource),a.xp6(10),a.Q6J("matHeaderRowDef",e.displayedColumns),a.xp6(1),a.Q6J("matRowDefColumns",e.displayedColumns)}}let y=(()=>{class e{constructor(){this.displayedColumns=["product","serviceName","userType"],this.dataSource=[{product:"Qpay",serviceName:"Employee information",userType:"Platform developer"},{product:"Qpay",serviceName:"Employee information",userType:"Platform developer"},{product:"Qpay",serviceName:"Employee information",userType:"Platform developer"}]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-user-info"]],decls:24,vars:1,consts:[[1,"p-4","component-wrapper"],[1,"card"],[1,"card-body"],[1,"row"],[1,"col-md-2","d-flex-justify-items-center"],["src","/assets/images/flat-user-icon-png-3@2x.png","alt",""],[1,"col-md-6","d-flex","flex-column"],[1,"mt-2"],[1,"ml-2"],[1,"col-md-4","d-flex","justify-content-end"],["src","/assets/images/edit_icon.svg","alt","expand icon",1,"expand_icon"],["mat-table","","class","mt-4",3,"dataSource",4,"ngIf"],["mat-table","",1,"mt-4",3,"dataSource"],["matColumnDef","product"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","serviceName"],["matColumnDef","userType"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div",3),a.TgZ(4,"div",4),a._UZ(5,"img",5),a.qZA(),a.TgZ(6,"div",6),a.TgZ(7,"div"),a._uU(8,"Vamshi Krishna"),a.qZA(),a.TgZ(9,"div",7),a.TgZ(10,"span"),a._uU(11,"Email ID :"),a.qZA(),a.TgZ(12,"span",8),a._uU(13,"test@gmail.com"),a.qZA(),a.qZA(),a.TgZ(14,"div",7),a.TgZ(15,"span"),a._uU(16,"Status :"),a.qZA(),a.TgZ(17,"span",8),a._uU(18,"Active"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(19,"div",9),a.TgZ(20,"span"),a._UZ(21,"img",10),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(22,"div",7),a.YNc(23,b,12,3,"table",11),a.qZA(),a.qZA()),2&e&&(a.xp6(23),a.Q6J("ngIf",t.dataSource.length>0))},directives:[i.O5,g.BZ,g.w1,g.fO,g.Dz,g.as,g.nj,g.ge,g.ev,g.XQ,g.Gk],styles:[""]}),e})();function N(e,t){1&e&&(a.TgZ(0,"th",24),a._uU(1,"Name"),a.qZA())}function x(e,t){if(1&e&&(a.TgZ(0,"td",25),a._uU(1),a.qZA()),2&e){const e=t.$implicit;a.xp6(1),a.hij(" ",null==e?null:e.username," ")}}function S(e,t){1&e&&(a.TgZ(0,"th",24),a._uU(1," Type "),a.qZA())}function C(e,t){if(1&e&&(a.TgZ(0,"td",25),a._uU(1),a.qZA()),2&e){const e=t.$implicit;a.xp6(1),a.hij(" ",null==e?null:e.type," ")}}function D(e,t){1&e&&(a.TgZ(0,"th",24),a._uU(1," Product "),a.qZA())}function w(e,t){if(1&e&&(a.TgZ(0,"td",25),a._uU(1),a.qZA()),2&e){const e=t.$implicit;a.xp6(1),a.hij(" ",null==e?null:e.product," ")}}function Y(e,t){1&e&&(a.TgZ(0,"th",24),a._uU(1," Created date "),a.qZA())}function k(e,t){if(1&e&&(a.TgZ(0,"td",25),a._uU(1),a.qZA()),2&e){const e=t.$implicit;a.xp6(1),a.hij(" ",null==e?null:e.createdTimestamp," ")}}function I(e,t){1&e&&(a.TgZ(0,"th",24),a._uU(1," Last Login date "),a.qZA())}function Q(e,t){if(1&e&&(a.TgZ(0,"td",25),a._uU(1),a.qZA()),2&e){const e=t.$implicit;a.xp6(1),a.hij(" ",null==e?null:e.lastLoginDate," ")}}function J(e,t){1&e&&(a.TgZ(0,"th",24),a._uU(1," Status"),a.qZA())}function B(e,t){if(1&e&&(a.ynx(0),a._UZ(1,"span",27),a.TgZ(2,"span"),a._uU(3),a.qZA(),a.BQk()),2&e){const e=a.oxw().$implicit,t=a.oxw(2);a.xp6(1),a.Akn(t.statusColors[t.getStatus(e)]),a.xp6(2),a.hij("",t.getStatus(e)," ")}}function E(e,t){if(1&e&&(a.TgZ(0,"td",25),a.YNc(1,B,4,3,"ng-container",26),a.qZA()),2&e){const e=a.oxw(2);a.xp6(1),a.Q6J("ngIf",e.statusItems)}}function F(e,t){1&e&&(a.TgZ(0,"th",24),a._uU(1," Action"),a.qZA())}function L(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"td",25),a.TgZ(1,"span"),a.TgZ(2,"img",28),a.NdJ("click",function(){const t=a.CHM(e).$implicit;return a.oxw(2).editUser(t)}),a.qZA(),a.qZA(),a.TgZ(3,"span"),a.TgZ(4,"img",29),a.NdJ("click",function(){const t=a.CHM(e).$implicit;return a.oxw(2).editUser(t)}),a.qZA(),a.qZA(),a.qZA()}}function j(e,t){1&e&&a._UZ(0,"tr",30)}function G(e,t){1&e&&a._UZ(0,"tr",31)}function P(e,t){if(1&e&&(a.TgZ(0,"table",12),a.ynx(1,13),a.YNc(2,N,2,0,"th",14),a.YNc(3,x,2,1,"td",15),a.BQk(),a.ynx(4,16),a.YNc(5,S,2,0,"th",14),a.YNc(6,C,2,1,"td",15),a.BQk(),a.ynx(7,17),a.YNc(8,D,2,0,"th",14),a.YNc(9,w,2,1,"td",15),a.BQk(),a.ynx(10,18),a.YNc(11,Y,2,0,"th",14),a.YNc(12,k,2,1,"td",15),a.BQk(),a.ynx(13,19),a.YNc(14,I,2,0,"th",14),a.YNc(15,Q,2,1,"td",15),a.BQk(),a.ynx(16,20),a.YNc(17,J,2,0,"th",14),a.YNc(18,E,2,1,"td",15),a.BQk(),a.ynx(19,21),a.YNc(20,F,2,0,"th",14),a.YNc(21,L,5,0,"td",15),a.BQk(),a.YNc(22,j,1,0,"tr",22),a.YNc(23,G,1,0,"tr",23),a.qZA()),2&e){const e=a.oxw();a.Q6J("dataSource",e.dataSource),a.xp6(22),a.Q6J("matHeaderRowDef",e.displayedColumns),a.xp6(1),a.Q6J("matRowDefColumns",e.displayedColumns)}}let M=(()=>{class e{constructor(e,t,r,i,s){this.router=e,this.httpService=t,this.apiService=r,this.stateService=i,this.datePipe=s,this.status=[{label:"Active"},{label:"Inactive"}],this.types=[{label:"Platform Developer"},{label:"Platform Developer"},{label:"Platform Developer"},{label:"Platform Developer"}],this.statusColors={Active:"background: #44CC3B 0% 0% no-repeat padding-box;",InActive:"background: #FF4B3A 0% 0% no-repeat padding-box;"},this.displayedColumns=["username","type","product","createdTimestamp","lastLoginDate","status","action"],this.dataSource=[]}ngOnInit(){this.commonApiCall(`${this.apiService.apiList.userManagement.list}`,"getMethod",{},"listUser",{},!1)}createUser(){this.router.navigate(["/content/home/user-management/create"])}editUser(e){this.router.navigate(["/content/home/user-management/edit/1"])}listUser(e){this.dataSource=e.map(e=>{let t=new Date(e.createdTimestamp);return e.createdTimestamp=this.datePipe.transform(t,"mediumDate"),e}),this.commonApiCall(`${this.apiService.apiList.serviceManagement.statusList}`,"getMethod",{},"statusList",{},!1)}getStatus(e){return e.status?this.statusItems.find(t=>t.statusCode==e.status).statusName:""}statusList(e){console.log(e),this.statusItems=e}commonApiCall(e,t,r,i,s,o=!1){this.stateService.addCalledApi(e),this.httpService[t](e,o,r).subscribe(e=>{this[i](e,s)},t=>{var r;(null===(r=t.error)||void 0===r?void 0:r.error)&&"string"==typeof t.error.error&&this.stateService.showMessage({type:"message",message:[t.error.error]}),this.stateService.removeCalledApi(e)},()=>{this.stateService.removeCalledApi(e)})}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(s.F0),a.Y36(n.O),a.Y36(l.s),a.Y36(c.b),a.Y36(i.uU))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-view-user-management"]],decls:16,vars:1,consts:[[1,"component-wrapper","pl-4","pr-4"],[1,"mt-3"],[1,"page-heading","d-flex"],["src","/assets/images/help_outline_black_24dp.svg","alt","help outline icon"],[1,"btn","btn-primary","ml-auto",3,"click"],["src","/assets/images/add_icon.svg","alt",""],[1,"search-bar","mt-17","row"],[1,"form-group","has-search","col-4","d-flex"],[1,"form-control-search-icon"],["src","/assets/images/search_black_24dp.svg","alt","search icons"],["type","text","placeholder","search",1,"form-control"],["mat-table","","class","mt-4",3,"dataSource",4,"ngIf"],["mat-table","",1,"mt-4",3,"dataSource"],["matColumnDef","username"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","type"],["matColumnDef","product"],["matColumnDef","createdTimestamp"],["matColumnDef","lastLoginDate"],["matColumnDef","status"],["matColumnDef","action"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],[4,"ngIf"],[1,"d-inline-block","mr-2",2,"width","10px","height","10px","border-radius","50%"],["src","/assets/images/view_icon.svg","alt","view icon",1,"expand_icon",3,"click"],["src","/assets/images/edit_icon.svg","alt","expand icon",1,"expand_icon",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"div"),a._uU(4,"User Management"),a.qZA(),a.TgZ(5,"span"),a._UZ(6,"img",3),a.qZA(),a.TgZ(7,"button",4),a.NdJ("click",function(){return t.createUser()}),a._UZ(8,"img",5),a._uU(9,"Create User"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(10,"div",6),a.TgZ(11,"div",7),a.TgZ(12,"span",8),a._UZ(13,"img",9),a.qZA(),a._UZ(14,"input",10),a.qZA(),a.qZA(),a.YNc(15,P,24,3,"table",11),a.qZA()),2&e&&(a.xp6(15),a.Q6J("ngIf",t.dataSource.length>0))},directives:[i.O5,g.BZ,g.w1,g.fO,g.Dz,g.as,g.nj,g.ge,g.ev,g.XQ,g.Gk],styles:[""]}),e})();const $=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-user-management"]],decls:1,vars:0,template:function(e,t){1&e&&a._UZ(0,"app-view-user-management")},directives:[M],styles:[""]}),e})()},{path:"edit/:id",component:Z},{path:"create",component:d},{path:"user",component:y}];let R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[s.Bz.forChild($)],s.Bz]}),e})();var O=r(105);let H=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[i.ez,O.m8,R]]}),e})()}}]);