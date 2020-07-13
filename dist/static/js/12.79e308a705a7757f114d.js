webpackJsonp([12],{RZdp:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("woOf"),a=s.n(o),i=s("yNht"),r={name:"DBConfig",data:function(){return{dbConfigs:[],dbTypeOptions:[{name:"MongoDB",value:"MongoDB"}],listLoading:!1,statusChangeLoading:!1,selects:[],titleMap:{add:"新增DB配置",edit:"编辑DB配置"},dialogStatus:"",formVisible:!1,loading:!1,formRules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 个字符",trigger:"blur"}],dbType:[{required:!0,message:"请选择DB类型",trigger:"blur"}],description:[{required:!1,message:"请输入描述",trigger:"blur"},{max:1024,message:"不能超过1024个字符",trigger:"blur"}]},form:{name:"",dbType:"",description:""},initForm:{name:"",dbType:"",description:""}}},methods:{queryDBConfigs:function(t){this.listLoading=!0;var e=this;Object(i.c)(t,{}).then(function(t){var s=t.status,o=t.data;e.listLoading=!1,"ok"===s?(e.totalNum=o.totalNum,e.dbConfigs=o.rows):e.$message.error({message:o,center:!0})}).catch(function(t){e.$message.error({message:"DB配置列表获取失败，请稍后刷新重试哦~",center:!0}),e.listLoading=!1})},getDBConfigList:function(){this.queryDBConfigs({})},handleDel:function(t,e){var s=this;this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then(function(){s.listLoading=!0;var t=s;updateTestEnv(e._id,{isDeleted:!0},{"Content-Type":"application/json"}).then(function(e){var s=e.status,o=e.data;"ok"===s?t.$message({message:"删除成功",center:!0,type:"success"}):t.$message.error({message:o,center:!0}),t.getTestEnvList()})})},handleChangeStatus:function(t,e){var s=this;s.statusChangeLoading=!0;var o={status:!e.status};updateTestEnv(e._id,o,{"Content-Type":"application/json"}).then(function(t){var o=t.status,a=t.data;s.statusChangeLoading=!1,"ok"===o?(s.$message({message:"状态变更成功",center:!0,type:"success"}),e.status=!e.status):s.$message.error({message:a,center:!0}),s.getTestEnvList()}).catch(function(){s.$message.error({message:"环境状态更新失败,请稍后重试哦",center:!0}),s.statusChangeLoading=!1,s.getTestEnvList()})},handleAdd:function(){this.formVisible=!0,this.form=a()({},this.form,this.initForm),this.dialogStatus="add"},handleEdit:function(t,e){this.formVisible=!0,this.form=a()({},this.form,e),this.dialogStatus="edit"},submit:function(){var t=this,e=this;this.$refs.form.validate(function(s){s&&t.$confirm("确认提交吗？","提示",{}).then(function(){e.loading=!0;var s={"Content-Type":"application/json"};if("add"==t.dialogStatus){var o={name:e.form.name.trim(),dbType:e.form.dbType,description:e.form.description.trim(),createUser:t.$store.getters.email||"anonymous"};Object(i.a)(o,s).then(function(t){var s=t.status,o=t.data;e.loading=!1,"ok"===s?(e.$message({message:"添加成功",center:!0,type:"success"}),e.$refs.form.resetFields(),e.formVisible=!1,e.getDBConfigList()):(e.$message.error({message:o,center:!0}),e.$refs.form.resetFields(),e.formVisible=!1,e.getDBConfigList())})}else if("edit"==t.dialogStatus){var a={name:e.form.name.trim(),dbType:e.form.dbType,description:e.form.description.trim(),lastUpdateUser:t.$store.getters.email||"anonymous"};Object(i.e)(e.form._id,a,s).then(function(t){var s=t.status,o=t.data;e.loading=!1,"ok"===s?(e.$message({message:"修改成功",center:!0,type:"success"}),e.$refs.form.resetFields(),e.formVisible=!1,e.getDBConfigList()):(e.$message.error({message:o,center:!0}),e.getDBConfigList())})}else e.$message.error({message:"系统出错",center:!0}),e.getDBConfigList()})})},selectsChange:function(t){this.selects=t},reportRowStyle:function(t){var e=t.row;t.rowIndex;return!0!==e.status?"background-color: #DDDDDD":""},ReportTableRow:function(t){t.row,t.rowIndex;return"reportTableRow"}},created:function(){this.getDBConfigList()}},n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("strong",{staticClass:"title"},[t._v(t._s(t.$route.meta.title))]),t._v(" "),o("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[o("el-form",{attrs:{inline:!0},nativeOn:{submit:function(t){t.preventDefault()}}},[o("router-link",{staticStyle:{"text-decoration":"none",color:"aliceblue"},attrs:{to:""}},[o("el-button",{staticClass:"return-list",on:{click:function(e){return t.$router.back(-1)}}},[o("i",{staticClass:"el-icon-d-arrow-left",staticStyle:{"margin-right":"5px"}}),t._v("返回\n        ")])],1),t._v(" "),t.$store.getters.roles.includes("admin")?o("el-form-item",{staticStyle:{"margin-left":"35px"}},[o("el-button",{staticClass:"el-icon-plus",attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v(" 新增DB配置")])],1):t._e()],1)],1),t._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dbConfigs,"row-style":t.reportRowStyle,"row-class-name":t.ReportTableRow,"highlight-current-row":""},on:{"selection-change":t.selectsChange}},[o("el-table-column",{attrs:{type:"selection","min-width":"5%"}}),t._v(" "),o("el-table-column",{attrs:{prop:"name",label:"名称","min-width":"15%","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"dbType",label:"DB类型","min-width":"20%","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"description",label:"描述","min-width":"20%","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"createAt",label:"创建时间","min-width":"20%","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"createUser",label:"创建者","min-width":"20%","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"lastUpdateTime",label:"更新时间","min-width":"20%","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"lastUpdateUser",label:"更新者","min-width":"20%","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"10%"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("img",{directives:[{name:"show",rawName:"v-show",value:e.row.status,expression:"scope.row.status"}],attrs:{src:s("7shL")}}),t._v(" "),o("img",{directives:[{name:"show",rawName:"v-show",value:!e.row.status,expression:"!scope.row.status"}],attrs:{src:s("IT+J")}})]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"操作","min-width":"50%"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"primary",size:"small"}},[o("router-link",{staticStyle:{color:"#fff"},attrs:{to:{name:"DBEnvConnect",params:{db_config_id:e.row._id}}}},[t._v("连接信息\n          ")])],1),t._v(" "),o("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(s){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),o("el-button",{attrs:{type:"info",size:"small",loading:t.statusChangeLoading},on:{click:function(s){return t.handleChangeStatus(e.$index,e.row)}}},[t._v("\n          "+t._s(!1===e.row.status?"启用":"禁用")+"\n        ")])]}}])})],1),t._v(" "),o("el-dialog",{staticStyle:{width:"60%",left:"20%"},attrs:{title:t.titleMap[t.dialogStatus],visible:t.formVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.formVisible=e}}},[o("el-form",{ref:"form",attrs:{model:t.form,rules:t.formRules,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"名称",prop:"name"}},[o("el-input",{attrs:{placeholder:"请输入DB名称","auto-complete":"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"DB类型",prop:"dbType"}},[o("el-select",{attrs:{clearable:"","auto-complete":"off"},model:{value:t.form.dbType,callback:function(e){t.$set(t.form,"dbType","string"==typeof e?e.trim():e)},expression:"form.dbType"}},t._l(t.dbTypeOptions,function(t,e){return o("el-option",{key:e+"",attrs:{label:t.name,value:t.value}})}),1)],1),t._v(" "),o("el-form-item",{attrs:{label:"描述",prop:"description"}},[o("el-input",{attrs:{placeholder:"请输入DB描述...",type:"textarea",rows:5},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{nativeOn:{click:function(e){t.formVisible=!1}}},[t._v("取消")]),t._v(" "),o("el-button",{attrs:{type:"primary",loading:t.loading},nativeOn:{click:function(e){return t.submit(e)}}},[t._v("提交")])],1)],1)],1)},staticRenderFns:[]};var l=s("VU/8")(r,n,!1,function(t){s("ToqF")},"data-v-cc206470",null);e.default=l.exports},ToqF:function(t,e){}});
//# sourceMappingURL=12.79e308a705a7757f114d.js.map