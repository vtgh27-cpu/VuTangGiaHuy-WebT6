const students = [
    { id: 1, name: "Nguyen Van An", age: 20, score: 8.5 },
    { id: 2, name: "Tran Thi Binh", age: 19, score: 6.5 },
    { id: 3, name: "Le Van Cuong", age: 21, score: 4.5 },
    { id: 4, name: "Pham Thi Dung", age: 20, score: 9.0 },
    { id: 5, name: "Hoang Van Em", age: 22, score: 5.5 },
    { id: 6, name: "Do Minh Anh", age: 19, score: 7.5 },
    { id: 7, name: "Bui Quang Huy", age: 20, score: 3.5 },
    { id: 8, name: "Nguyen Thi Lan", age: 21, score: 8.0 },
    { id: 9, name: "Tran Duc Long", age: 22, score: 6.0 },
    { id: 10, name: "Le Thu Ha", age: 20, score: 9.5 },
    { id: 11, name: "Pham Minh Khang", age: 19, score: 5.0 },
    { id: 12, name: "Vo Ngoc Mai", age: 21, score: 7.0 },
    { id: 13, name: "Dang Tuan Nam", age: 20, score: 4.0 },
    { id: 14, name: "Hoang Thu Phuong", age: 22, score: 8.8 },
    { id: 15, name: "Nguyen Gia Bao", age: 19, score: 6.8 },
    { id: 16, name: "Tran Minh Quan", age: 20, score: 7.8 },
    { id: 17, name: "Le Ngoc Son", age: 21, score: 2.5 },
    { id: 18, name: "Pham Hai Yen", age: 22, score: 9.2 },
    { id: 19, name: "Bui Thanh Tung", age: 20, score: 5.8 },
    { id: 20, name: "Do Khanh Linh", age: 19, score: 8.2 }
];

// yeu cau 1 

students.forEach((students)=>{
    console.log(`
        ID : ${students.id}
        Name : ${students.name}
        Age : ${students.age}
        Score : ${students.score}
        ----------------------------------
        `);
});

// yeu cau 2 

function isPassed(score) {
    if( score >= 5 ){
        // console.log(`${students.name} : Đạt`)
        return "Đạt" ;
    }
    else {
        // console.log(`${students.name} : Không Đạt`)
        return "Không Đạt"
    }
}

students.forEach((students)=>{
    console.log(`${students.name} : ${isPassed(students.score)}`);
});

// yeu cau 3 

console.log(`Danh sach thi sinh dat :`)

const passedStudents = students.filter((students) => students.score >= 5 ) ;

passedStudents.forEach((students)=>{
    console.log(`${students.name}`);
})

// yeu cau 4 

console.log(`Danh sach thi sinh khong dat :`)

const failedStudents = students.filter((students) => students.score < 5 ) ;

failedStudents.forEach((students)=>{
    console.log(`${students.name} - ${students.score} điểm`);
})

// yeu cau 5 

console.log(`Danh sach thi sinh loc theo tuoi :`)

const ages21 = students.filter((students) => students.age >= 21 ) ;

ages21.forEach((students)=>{
    console.log(`${students.name} - ${students.age} tuổi`);
})

// yeu cau 6 

console.log(`Danh sach thi sinh diem cao :`);

const hsg = students.filter((students) => students.score >= 8 ) ;

const a = hsg.map((students) => `"${students.name} - Hoc Sinh Gioi"`);

console.log(a);

// yeu cau 7 

const getClassification = (score) => {
    if( score < 5 )
    {
        return "Yếu" ;
    }
    else if( score >= 8 )
    {
        return "Giỏi" ;
    }
    else if( score >= 6.5 )
    {
        return "Khá" ;
    }
    else if( score >= 5 )
    {
        return "Trung Bình" ;
    }
};

const b = students.map((students) => `${students.name} - ${getClassification(students.score)}`);

console.log(b) ;

// Yeu cau 8 

const result = students.filter((students) => students.score >= 6.5 ).map((students) => `${students.name} - ${students.score} Điểm`);

console.log(result);