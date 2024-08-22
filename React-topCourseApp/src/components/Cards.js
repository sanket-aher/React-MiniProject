import React, { useState } from "react";
import Card from './Card';

const Cards = ({courses,category}) =>{

    let [likedCourses,setLikedCourses] = useState([]);

    // returns you a list of all courses received from api response
    const getCourses = () => {
        if(category === "All")
        {
            let allCourses = [];
            Object.values(courses).forEach( (courseCategory) =>{
                courseCategory.forEach((courseData) =>{
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            // main sirf specific category ka array pass krhunga
            return courses[category];
        }
        
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map( (course) =>{
                    return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />      
                })
            }
        </div>
    )
}

export default Cards;