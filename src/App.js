import { useState } from "react";
import { CourseCard } from "./components/CourseCard";
import CourseInput from "./components/CourseInput";
import GradeDisplay from "./components/GradeDisplay";
import './components/CourseInput.css';
import './components/GradeDisplay.css';


function App() {
  const grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
  const credit = [3, 2, 1];
  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({
    subjName:'',
    subjCode:'',
    credit:'',
    gradeLetter:'',
  });
  const [GPA, setGPA] = useState(0.0);

  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA(d) {
    // TODO
    var grade_num = 0;
    var credit_cal = 0;
    var all_cal = 0;

    d.forEach((i) => {
      switch(i.gradeLetter){
        case 'A':
          grade_num = 4;
          credit_cal += Number(i.credit);
          all_cal += grade_num * credit_cal;
          break;
        
        case 'B+':
          grade_num = 3.5;
          credit_cal += Number(i.credit);
          all_cal += grade_num * credit_cal;
          break;
          
        case 'B':
          grade_num = 3;
          credit_cal += Number(i.credit);
          all_cal += grade_num * credit_cal;
          break;

        case 'C+':
          grade_num = 2.5;
          credit_cal += Number(i.credit);
          all_cal += grade_num * credit_cal;
          break;

        case 'C':
          grade_num = 2;
          credit_cal += Number(i.credit);
          all_cal += grade_num * credit_cal;
          break;
          
        case 'D+':
          grade_num = 1.5;
          credit_cal += Number(i.credit);
          all_cal += grade_num * credit_cal;
          break;

        case 'D':
          grade_num = 1;
          credit_cal += Number(i.credit);
          all_cal += grade_num * credit_cal;
          break;

        case 'F':
          grade_num = 0;
          credit_cal += Number(i.credit);
          all_cal += grade_num * credit_cal;
          break;
      }
    })
    setGPA(all_cal/credit_cal);

  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event
   */
  function addCourse(event) {
    event.preventDefault();
    // TODO
    const temp = []

    // recalculate GPA
    calculateGPA(temp);
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
        <CourseCard />
      </div>
      {/* TODO add course input form */}
      <h2 className="text-center text-2xl">Input your data</h2>
      {/* <CourseInput /> ลองทำ component แล้วโคตรยากเลยครับ*/}
      <div className="input-section">
            <p className="block">Subject Name:</p>
            <input type="text" placeholder="Subject Name" value={inputData.subjName}/>
            <p className="block">Subject Code:</p>
            <input type="text" placeholder="Subject Code" value={inputData.subjCode}/>
            <p className="block">Credit:</p>
            <select name="credit" id="credit" value={inputData.credit}>
                {
                    credit.map((i) => (
                        <option key={i} value={i}>{i}</option>
                    ))
                }
            </select>
            <p className="block">Grade Letter:</p>
            <select name="gradeLetter" id="gradeLetter" value={inputData.gradeLette}>
                {
                    grade.map((i) => (
                        <option key={i} value={i}>{i}</option>
                    ))
                }
            </select>
            <button className="btn btn-green">Add</button>
        </div>
      {/* TODO display calculated GPA */}
      <h2 className="text-center text-2xl">Result</h2>
      {/* <GradeDisplay /> อันนี้ก็ลองทำแล้ว โคตรยากเลยครับ*/}
      <div className="output-section">
          <p>GPAX: {GPA.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
