import {useState} from 'react';
import './CourseInput.css';
import GradeDisplay from './GradeDisplay';

function CourseInput() {
    const grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
    const credit = [3, 2, 1];
    const [inputData, setInputData] = useState({
        subjName:'',
        subjCode:'',
        credit:'',
        gradeLetter:'',
      });
    return ( 
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
    );
}

export default CourseInput;