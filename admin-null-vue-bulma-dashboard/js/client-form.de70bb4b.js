(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["client-form"],{2769:function(t,e,a){var s=a("5ca0"),i=a("51f5"),r=s(i);t.exports=r},"2b03":function(t,e){function a(t,e,a,s){var i=t.length,r=a+(s?1:-1);while(s?r--:++r<i)if(e(t[r],r,t))return r;return-1}t.exports=a},"2b9d":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.isDismissed?t._e():a("div",{staticClass:"notification"},[a("div",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("div",{staticClass:"level-item"},[t._t("default")],2)]),a("div",{staticClass:"level-right"},[a("button",{staticClass:"button is-small is-white",attrs:{type:"button"},on:{click:t.dismiss}},[t._v("Dismiss")])])])])},i=[],r={name:"Notification",data(){return{isDismissed:!1}},methods:{dismiss(){this.isDismissed=!0,this.$buefy.snackbar.open({message:"Dismissed",queue:!1})}}},o=r,l=a("2877"),n=Object(l["a"])(o,s,i,!1,null,null,null);e["a"]=n.exports},"51f5":function(t,e,a){var s=a("2b03"),i=a("badf"),r=a("4b17"),o=Math.max;function l(t,e,a){var l=null==t?0:t.length;if(!l)return-1;var n=null==a?0:r(a);return n<0&&(n=o(l+n,0)),s(t,i(e,3),n)}t.exports=l},"5ca0":function(t,e,a){var s=a("badf"),i=a("30c9"),r=a("ec69");function o(t){return function(e,a,o){var l=Object(e);if(!i(e)){var n=s(a,3);e=r(e),a=function(t){return n(l[t],t,l)}}var c=t(e,a,o);return c>-1?l[n?e[c]:c]:void 0}}t.exports=o},e96b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("title-bar",{attrs:{"title-stack":t.titleStack}}),a("hero-bar",[t._v(" "+t._s(t.heroTitle)+" "),a("router-link",{staticClass:"button",attrs:{slot:"right",to:t.heroRouterLinkTo},slot:"right"},[t._v(" "+t._s(t.heroRouterLinkLabel)+" ")])],1),a("section",{staticClass:"section is-main-section"},[a("notification",{staticClass:"is-info"},[a("div",[a("span",[a("b",[t._v("Demo only.")]),t._v(" No data will be saved/updated")])])]),a("tiles",[a("card-component",{staticClass:"tile is-child",attrs:{title:t.formCardTitle,icon:"account-edit"}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("b-field",{attrs:{label:"ID",horizontal:""}},[a("b-input",{attrs:{"custom-class":"is-static",readonly:""},model:{value:t.form.id,callback:function(e){t.$set(t.form,"id",e)},expression:"form.id"}})],1),a("hr"),a("b-field",{attrs:{label:"Avatar",horizontal:""}},[a("file-picker")],1),a("hr"),a("b-field",{attrs:{label:"Name",message:"Client name",horizontal:""}},[a("b-input",{attrs:{placeholder:"e.g. John Doe",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-field",{attrs:{label:"Company",message:"Client's company name",horizontal:""}},[a("b-input",{attrs:{placeholder:"e.g. Berton & Steinway",required:""},model:{value:t.form.company,callback:function(e){t.$set(t.form,"company",e)},expression:"form.company"}})],1),a("b-field",{attrs:{label:"City",message:"Client's city",horizontal:""}},[a("b-input",{attrs:{placeholder:"e.g. Geoffreyton",required:""},model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}})],1),a("b-field",{attrs:{label:"Created",horizontal:""}},[a("b-datepicker",{attrs:{placeholder:"Click to select...",icon:"calendar-today"},on:{input:t.input},model:{value:t.form.created_date,callback:function(e){t.$set(t.form,"created_date",e)},expression:"form.created_date"}})],1),a("hr"),a("b-field",{attrs:{label:"Progress",horizontal:""}},[a("b-slider",{model:{value:t.form.progress,callback:function(e){t.$set(t.form,"progress",e)},expression:"form.progress"}})],1),a("hr"),a("b-field",{attrs:{horizontal:""}},[a("b-button",{attrs:{type:"is-primary",loading:t.isLoading,"native-type":"submit"}},[t._v("Submit")])],1)],1)]),t.isProfileExists?a("card-component",{staticClass:"tile is-child",attrs:{title:"Client Profile",icon:"account"}},[a("user-avatar",{staticClass:"image has-max-width is-aligned-center",attrs:{avatar:t.form.avatar}}),a("hr"),a("b-field",{attrs:{label:"Name"}},[a("b-input",{attrs:{value:t.form.name,"custom-class":"is-static",readonly:""}})],1),a("b-field",{attrs:{label:"Company"}},[a("b-input",{attrs:{value:t.form.company,"custom-class":"is-static",readonly:""}})],1),a("b-field",{attrs:{label:"City"}},[a("b-input",{attrs:{value:t.form.city,"custom-class":"is-static",readonly:""}})],1),a("b-field",{attrs:{label:"Created"}},[a("b-input",{attrs:{value:t.createdReadable,"custom-class":"is-static",readonly:""}})],1),a("hr"),a("b-field",{attrs:{label:"Progress"}},[a("progress",{staticClass:"progress is-small is-primary",attrs:{max:"100"},domProps:{value:t.form.progress}},[t._v(t._s(t.form.progress))])])],1):t._e()],1)],1)],1)},i=[],r=a("bc3a"),o=a.n(r),l=a("5a0c"),n=a.n(l),c=a("2769"),d=a.n(c),u=a("1e1d"),m=a("503b"),f=a("9e7c"),b=a("6df7"),h=a("3b73"),p=a("808f"),v=a("2b9d"),y={name:"ClientForm",components:{UserAvatar:p["a"],FilePicker:h["a"],CardComponent:b["a"],Tiles:f["a"],HeroBar:m["a"],TitleBar:u["a"],Notification:v["a"]},props:{id:{default:null}},data(){return{isLoading:!1,form:this.getClearFormObject(),createdReadable:null,isProfileExists:!1}},computed:{titleStack(){let t;return t=this.isProfileExists?this.form.name:"New client",["Admin","Clients",t]},heroTitle(){return this.isProfileExists?this.form.name:"Create Client"},heroRouterLinkTo(){return this.isProfileExists?{name:"client.new"}:"/"},heroRouterLinkLabel(){return this.isProfileExists?"New client":"Dashboard"},formCardTitle(){return this.isProfileExists?"Edit Client":"New Client"}},created(){this.getData()},methods:{getClearFormObject(){return{id:null,name:null,company:null,city:null,created_date:new Date,created_mm_dd_yyyy:null,progress:0}},getData(){this.id&&o.a.get(this.$router.options.base+"data-sources/clients.json").then(t=>{const e=d()(t.data.data,t=>t.id===parseInt(this.id));e?(this.isProfileExists=!0,this.form=e,this.form.created_date=new Date(e.created_mm_dd_yyyy),this.createdReadable=n()(new Date(e.created_mm_dd_yyyy)).format("MMM D, YYYY")):this.$router.push({name:"client.new"})}).catch(t=>{this.$buefy.toast.open({message:"Error: "+t.message,type:"is-danger",queue:!1})})},input(t){this.createdReadable=n()(t).format("MMM D, YYYY")},submit(){this.isLoading=!0,setTimeout(()=>{this.isLoading=!1,this.$buefy.snackbar.open({message:"Demo only",queue:!1})},500)}},watch:{id(t){this.isProfileExists=!1,t?this.getData():this.form=this.getClearFormObject()}}},g=y,C=a("2877"),_=Object(C["a"])(g,s,i,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=client-form.de70bb4b.js.map