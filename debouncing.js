//Debouncing in JS

let counter = 0;
const getData = () => {
  //Calls an API and gets data
  console.log("Fetching Data....", counter++);
};

//Debounce function takes 2 args, function & a delay & does not make this function unneccessary calls again & again & will only make a
//call if the difference between timer interval between two function calls is greater than delay. It optimize performance of our
//web page
const debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const betterFunction = debounce(getData, 300);
