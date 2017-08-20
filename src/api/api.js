import axios from 'axios'
const ENDPOINT = "http://localhost:9001/"
const API = {
    /**
    * Call the API and get todos' data
    * @param callback function to call when data is fully loaded
    */
    getTodos(callback) {
        axios
            .get(ENDPOINT + 'tasks')
            .then((response) => {
                callback({
                    data: response.data.tasks
                })
            })
            .catch((error) => {
                return console.log(error)
            })
    },
    /**
    * Call the API and edit todo's data
    * @param callback function to call after response
    * @param todo 
    */
    editTodo(callback, todo) {
        axios
            .put(ENDPOINT + 'task/update/'+todo.id+'/'+todo.title+'/'+todo.description)
            .then((response) => {
                callback({
                    data: response.data.task
                })
            })
            .catch((error) => {
                return console.log(error)
            })
    },
    /**
    * Call the API and add todo's data
    * @param callback function to call after response
    * @param todo 
    */
    addTodo(callback, todo) {
        axios
            .post(ENDPOINT + 'task/create/'+todo.id+'/'+todo.title+'/'+todo.description)
            .then((response) => {
                callback({
                    data: response.data.task
                })
            })
            .catch((error) => {
                return console.log(error)
            })
    },

    /**
    * Call the API and remove todo's data
    * @param callback function to call after response
    * @param todo 
    */
    removeTodo(callback, todo) {
        axios
            .delete(ENDPOINT + 'task/delete/'+todo.id)
            .then((response) => {
                console.log(response)
                callback({
                    data: response.data.task
                })
            })
            .catch((error) => {
                return console.log(error)
            })
    },
}

export default API