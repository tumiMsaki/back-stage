import axios from 'axios';


axios.interceptors.request.use(config => {
    return config
  }, error => {
    return Promise.reject(error)
  })
  

axios.interceptors.response.use(response => {
    return response
  }, error => {
    return Promise.reject(error)
  })


axios.defaults.withCredentials=true


const login = (data) => axios.post('login',data,{
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
}).then(resp => resp)
  .catch(err => err)


const logout = () => axios.post('logout').then(resp => resp).catch(err => err)



const change = (data) => axios.post('change',data,{
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
}).then(resp => resp).catch(err => err)


const findStu = (data) => axios.post('findStu',data).then(resp => resp).catch(err => err)


const findStuName = (data) => axios.post('findStu',data).then(resp => resp).catch(err => err)


const judge = () => axios.post('judge').then(resp => resp).catch(err => err)


// const findClass = () => axios.post('findClass').then(resp => resp).catch(err => err)


const findAll = (data) => axios.post('findAll',data).then(resp => resp).catch(err => err)


const findClassStu = (data) => axios.post('findClass',data).then(resp => resp).catch(err => err)


const selectOut = () => axios.post('selectOut').then(resp => resp).catch(err => err)


const TutorMessage = (data) => axios.post('TutorMessage',data).then(resp => resp).catch(err => err)


const SchoolMessage = (data) => axios.post('SchoolMessage',data).then(resp => resp).catch(err => err)


const ClassByTutorMessage = (data) => axios.post('ClassByTutorMessage',data).then(resp => resp).catch(err => err)


const ClassBySchoolMessage = (data) => axios.post('ClassBySchoolMessage',data).then(resp => resp).catch(err => err)


const AllByTutorMessage = (data) => axios.post('AllByTutorMessage',data).then(resp => resp).catch(err => err)


const AllBySchoolMessage = (data) => axios.post('AllBySchoolMessage',data).then(resp => resp).catch(err => err)

export {
    login,
    logout,
    change,
    findStu,
    findStuName,
    judge,
    findAll,
    findClassStu,
    selectOut,
    TutorMessage,
    SchoolMessage,
    ClassBySchoolMessage,
    ClassByTutorMessage,
    AllBySchoolMessage,
    AllByTutorMessage
}




