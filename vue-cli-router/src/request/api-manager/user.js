import { getAction, deleteAction,postAction,putAction } from '../http'

export default {
  //list  1.注册接口
  list(params = {}) {
    return getAction('/api/design/sysUser/list',params);
  },
  
  //add
  addSysUser(params = {}) {
    return postAction('/api/design/sysUser/add',params);
  },
  //delete
  deleteSysUser(params = {}) {
    return deleteAction('/api/design/sysUser/delete',params);
  },
 //edit
 editSysUser(params = {}) {
  return putAction('/api/design/sysUser/edit',params);
},
 //queryById 
 queryByIdSysUser(params = {}) {
  return getAction('/api/design/sysUser/queryById',params);
},
 
}