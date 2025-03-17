import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5283';
axios.interceptors.response.use(
  (response) => {
    // אם התגובה תקינה, מחזירים אותה
    return response;
  },
  (error) => {
    // במקרה של שגיאה בתגובה
    console.error("Response error:", error.response ? error.response : error.message);
    return Promise.reject(error);
  }
);


export default {
  getTasks: async () => {
    const result = await axios.get(`/`)    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    const result = await axios.post(`/${name}`)
    return result.data;
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
   const result = await axios.put(`/${id}/${isComplete}`)
    return result.data;
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    const result = await axios.delete(`/${id}`)
    return result.data;
  }
};
