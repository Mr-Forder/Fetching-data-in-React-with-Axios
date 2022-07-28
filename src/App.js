import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
  //create state for data - default to null as we need to make sure that the state can expect to recieve no data if the API is down - so we don't use an empty string or array
  const [data, setData] = useState(null);
  //Write our Axios request inside a useEffect, so it'll execute on app/component mount
  useEffect(() => {
    //initial request via axios.get method takes in url endpoint as argument - this will return a promise (all async methods return a promise)
    //the cool thing about axios is you can define what method you want to use by specifying the relevant axios method to do it, i.e, post, put, get, etc
    //we then chain a .then method onto it.
    //When using axios, we don't have to change the returned data into a readable (usually json) format, Axios does it automatically.
    axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      //.then method is then used to return the API data. in axios this is always written as .data. So class the response as an object, with Axios targeting the data within it.
      //take a look at the response in the console to see what it contains - config, headers, the data itself, status - loads of stuff.
      console.log(res);
      //set data from response into state
      setData(res.data.message);
    });
  }, []);
  return (
    <div className="App bg-gray-800">
      <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl">
        Fetching data in React with Axios
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400 flex justify-center">
        Axios is a commonly used packaged for fetching API data in react.
      </p>
      <p className="mt-2 text-gray-600 dark:text-gray-400 flex justify-center">
        Here, we're using it to fetch a random image of a dog. Check the
        comments in the code to see the actual process behind using Axios.
      </p>

      <div class="flex flex-col items-center justify-center mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl pt-8">
          Look at this handsome boy!
        </h1>

        <img src={data} alt="" />
      </div>
    </div>
  );
}

export default App;
