import './CourseInput.css';
import GradeDisplay from './GradeDisplay';

function CourseInput() {
    const grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
    const credit = [3, 2, 1];
    return ( 
        <div className="input-section">
            <p className="block">Subject Name:</p>
            <input type="text" placeholder="Subject Name"/>
            <p className="block">Subject Code:</p>
            <input type="text" placeholder="Subject Code"/>
            <p className="block">Credit:</p>
            <select name="credit" id="credit" value="inputData.grd">
                {
                    credit.map((i) => (
                        <option key={i} value={i}>{i}</option>
                    ))
                }
            </select>
            <p className="block">Grade Letter:</p>
            <select name="gradeLetter" id="gradeLetter">
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