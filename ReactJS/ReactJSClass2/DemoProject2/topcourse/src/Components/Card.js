import React from "react";
import { click } from '@testing-library/user-event/dist/click';
import {FcLike , FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;

    /* console.log('Course:', course); */
    
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        // Logic
        if (likedCourses.includes(props.course.id)) {
            // pahle se liked hua pada h
            setLikedCourses((prev) => prev.filter((cid) => cid !== props.course.id));
            toast.warning("Liked Removed");
        }
        else {
            // pahle se like nahi hai course 
            // insert karne h y course like course me 
            if (likedCourses.length === 0) {
                setLikedCourses([props.course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, props.course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className="w-[300px] bg-gray-900 bg-opacity-80 rounded-sm overflow-hidden text-white">
            <div className="relative">
                <img src={course.image.url} ></img>
                <div className="absolute w-[40px] h-[40px] rounded-full bg-white right-2 bottom-3 grid place-items-center">
                    <button onClick={clickHandler}>{
                        likedCourses.includes(course.id)?
                        (<FcLike fontSize="1.75rem" />):
                        (<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                    </button>
                </div>
            </div>
            
            <div className="p-4">
                <p className="font-bold text-lg leading-6">{course.title}</p>
                <p className="text-md mt-2">{
                    course.description.length>100 ?(course.description.substr(0,100)):(course.description)
                }</p>
            </div>
        </div>
    )
}

export default Card;