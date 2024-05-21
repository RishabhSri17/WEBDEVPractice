import './App.css';
import React, { useState,useEffect } from 'react';
import { apiUrl,filterData } from './data';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
import Card from './Components/Card';
import Spinner from './Components/Spinner'
import {toast} from "react-toastify";

function App() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) {
        // If the response is not ok, handle the error
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const output = await res.json();

      // Save data
      setCourses(output.data);
    } catch (err) {
      // Check the error message for specific status codes
      if (err.message.includes('404')) {
        toast.error("Error 404: Data not found");
      } else if (err.message.includes('500')) {
        toast.error("Error 500: Internal Server Error");
      } else {
        toast.error("Something went wrong");
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  /* const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();

      // Save data
      setCourses(output.data);
      // setCourses(output);
    } catch (err) {
      toast.error("Something Went Wrong");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []); */


  return (
    <div className='flex min-h-screen flex-col bg-gray-700'>
      <div>
       <Navbar />
       </div>
      
      <div className="bg-gray-700">
      <div>
       <Filter
         filterData={filterData}
         category={category}
         setCategory={setCategory}
       />
      </div>

      <div className="flex flex-row w-11/12 max-w-[1200px] mx-auto justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category}/>)
        }
      </div>
      </div>
       
    </div>
  );
};

export default App;
