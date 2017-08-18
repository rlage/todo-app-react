import axios from 'axios'
const ENDPOINT = "http://localhost:9001/"
const API = {
    /**
    * Call the API and get todo's data
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
}

export default API