import React, { useState } from "react";
import Card from "./Card"

const Cards = (props) => {
    /* console.log(props.category);
    console.log(props.courses); */
    let courses = props.courses;
    let category = props.category;
    const[likedCourses,setLikedCourses] = useState([]);

    function getCourses(){
        let allCourses = [];
        if(category==="All"){
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        /* console.log(allCourses); */
        return allCourses;
    }else{
        //specific category
        return courses[category];
    }
    }

    /* const getCourses = () => {
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })
        return allCourses;
    } */

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4 ">
            {
                getCourses().map( (course) => {
                    /* console.log(course); */
                    return <Card key={course.id} course={course} likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses}/>
                })
            }
        </div>
    )
}

export default Cards;