class User{
    static all(){
        return fetch("https://reactnative.dev/movies.json")
        .then((response)=>{
         return response.json;
        })
    }
}