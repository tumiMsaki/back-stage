import axios from 'axios';

const login = (username,password) => axios.post('login',{
    "username":username,
    "passwrod":password
}).then(resp => resp)
  .catch(err => err)


const logout = () => axios.post('logout')
.then(resp => resp)
.catch(err => err)



const change = (username,password,passwordNew1,passwordNew2) => axios.post('change',{
    "username":username,
    "passwordOld":password,
    "passwordNew1":passwordNew1,
    "passwordNew2":passwordNew2
}).then(resp => resp)
.catch(err => err)


const findStu = (stu) => {
    if(isNaN(stu)){
        axios.post('findStu',{
            "stunum":stu
        }).then(resp => resp)
          .catch(err => err)
    }else{
        axios.post('findStu',{
            "stuname":stu
        }).then(resp => resp)
          .catch(err => err)
    }
}

const judge = () => axios.post('judge').then(resp => resp).catch(err => err)


const findClass = () => axios.post('findClass').then(resp => resp).catch(err => err)


const findAll = (grade,pagenum) => axios.post('findAll',{
    "grade":grade,
    "pagenum":pagenum
}).then(resp => resp)
.catch(err => err)



const findClassStu = (pagenum,classnum) => axios.post('findClassStu',{
    "pagenum":pagenum,
    "classnum":classnum
}).then(resp => resp)
.catch(err => err)

const selectStu = (xh) => axios.post('selectStu',{
    "xh":xh
}).then(resp => resp)
.catch(err => err)


const selectOut = () => axios.post('selectOut').then(resp => resp).catch(err => err)

const TutorMessage = (template,time,content,remark) => axios.post('TutorMessage',{
    "template":template,
    "time":time,
    "content":content,
    "remark":remark
}).then(resp => resp)
.catch(err => err)


const SchoolMessage = (template,school,time,content,remark) => axios.post('SchoolMessage',{
    "template":template,
    "school":school,
    "time":time,
    "content":content,
    "remark":remark
}).then(resp => resp)
.catch(err => err)


const ClassByTutorMessage = (classnum,template,time,content,remark) => axios.post('ClassByTutorMessage',{
    "classnum":classnum,
    "template":template,
    "time":time,
    "content":content,
    "remark":remark
}).then(resp => resp)
.catch(err => err)


const ClassBySchoolMessage = (classnum,template,school,time,content,remark) => axios.post('ClassBySchoolMessage',{
    "classnum":classnum,
    "template":template,
    "school":school,
    "time":time,
    "content":content,
    "remark":remark
}).then(resp => resp)
.catch(err => err)


const AllByTutorMessage = (grade,template,time,content,remark) => axios.post('AllByTutorMessage',{
    "grade":grade,
    "template":template,
    "time":time,
    "content":content,
    "remark":remark
}).then(resp => resp)
.catch(err => err)


const AllBySchoolMessage = (grade,template,school,time,content,remark) => axios.post('AllBySchoolMessage',{
    "grade":grade,
    "template":template,
    "school":school,
    "time":time,
    "content":content,
    "remark":remark
}).then(resp => resp)
.catch(err => err)

export {
    login,
    logout,
    change,
    findStu,
    judge,
    findAll,
    findClass,
    findClassStu,
    selectOut,
    selectStu,
    TutorMessage,
    SchoolMessage,
    ClassBySchoolMessage,
    ClassByTutorMessage,
    AllBySchoolMessage,
    AllByTutorMessage
}




