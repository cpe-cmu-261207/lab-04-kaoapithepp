import { useState } from "react";
import { CourseCard } from "./components/CourseCard";
import CourseInput from "./components/CourseInput";
import GradeDisplay from "./components/GradeDisplay";

function App() {
  const credit = [1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({});
  const [GPA, setGPA] = useState(4.0);

  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA() {
    // TODO
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event
   */
  function addCourse(event) {
    event.preventDefault();
    // TODO

    // recalculate GPA
    calculateGPA();
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id
   */
  function onDeleteCourse(id) {
    // TODO
  }

  return (
    <div className="container mx-auto h-screen">
      <h1 className="text-center text-4xl p-3 tracking-widest">
        Grade Calculator
      </h1>
      <div className="h-2/3 md:w-2/4 p-3 rounded-lg mx-auto overflow-auto">
        <h1 className="text-2xl my-3">Added courses</h1>
        {/* TODO display courses */}
      </div>
      {/* TODO add course input form */}
      <h2 className="text-center text-2xl">Input your data</h2>
      <CourseInput />
      {/* TODO display calculated GPA */}
      <h2 className="text-center text-2xl">Result</h2>
      <GradeDisplay />
    </div>
  );
}

export default App;
