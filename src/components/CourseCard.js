export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return (
    <div className="grade-elm">
      <h2>Subject Name: {props.sub_1}</h2>
      <h2>Subject Code: {props.subID_1}</h2>
      <h2>Credit: {props.cred_1}</h2>
      <h2>Grade: {props.grd_1}</h2>
      <div className="remove-btn">
        <p onClick={()=>{props.btn_1(props.subID_1)}}>Remove</p>
      </div>
    </div>
    
  );
};
