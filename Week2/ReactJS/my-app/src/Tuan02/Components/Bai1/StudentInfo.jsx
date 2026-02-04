import './StudentInfo.css';

function StudentInfo(props) {
    return (
        <div className="student-info">
            <p>Họ và tên: {props.hoTen}</p>
            <p>MSSV: {props.mssv}</p>
            <p>Lớp: {props.lop}</p>
        </div>
    )
}

export default StudentInfo;