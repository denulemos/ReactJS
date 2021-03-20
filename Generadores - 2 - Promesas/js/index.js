const URL = 'https://jsonplaceholder.typicode.com';

function* initInfo() {
  const users = yield axios.get(URL + '/users'); 
  for(let i = 0; i < users.length; i++) {
    users[i].posts = yield axios.get(URL + '/posts?userId=' + users[i].id);
  }
  console.log(users);
}

function smartGen(generator) {
  function handle(result) {
    if(result.value && result.value.then && !result.done) {
      result.value.then(response => handle(generator.next(response.data)));
    }
  }
  
  let result = generator.next();
  handle(result);
}

smartGen(initInfo());