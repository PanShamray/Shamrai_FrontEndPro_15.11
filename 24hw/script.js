class Student {
    constructor(name, surName, yearOfBirth) {
        this.name = name;
        this.surName = surName;
        this.yearOfBirth = yearOfBirth;
        this.grades = [];
        this.attendance = Array(25).fill(null);
    }

    calcAge(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.yearOfBirth;
    }

    getMediumGrade(){
        if(this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    }

    present() {
        this.updateAttendance(true);
    }

    absent() {
        this.updateAttendance(false);
    }

    updateAttendance(isPresent) {
        const indexOfNextLesson = this.attendance.findIndex(lesson => lesson === null);
        if (indexOfNextLesson !== -1) {
          this.attendance[indexOfNextLesson] = isPresent;
        } else {
          console.log("Масив відвідуваності повністю заповнений.");
        }
      }

    summary() {
        const averageGrade = this.getMediumGrade();
        const attendanceRate = this.attendance.filter(Boolean).length / this.attendance.length;

        if(averageGrade > 90 && attendanceRate > 0.9) {
            return "Молодець!";
        } else if(averageGrade > 90 || attendanceRate > 0.9) {
            return "Добре, але можна краще";
          } else {
            return "Редиска!";
          }
    }
}
  

  const student1 = new Student("Владислав", "Шамрай", 2003);
  const student2 = new Student("Поліна", "Бабич", 2002);
  
  student1.grades = [95, 92, 89, 91, 100, 99, 70];
  student2.grades = [85, 88, 92, 94, 70, 100, 93, 85];
  
  student1.present();
  student1.present();
  student1.absent();
  student1.absent();
  student1.present();
  student1.absent();
  student1.absent();
  student1.present();
  student1.present();
  student1.present();
  student1.present();

  student2.present();
  student2.present();
  student2.absent();
  student2.present();
  student2.present();
  student2.absent();
  student2.present();
  student2.present();
  student2.absent();
  student2.present();
  student2.present();
  student2.absent();
  
  
  console.log("Студент 1:");
  console.log(student1.name, student1.surName);
  console.log("Вік:", student1.calcAge());
  console.log("Середній бал:", student1.getMediumGrade());
  console.log("Відвідуваність:", student1.attendance);
  console.log("Сумарна оцінка:", student1.summary());
  
  console.log("---------------------");
  
  console.log("Студент 2:");
  console.log(student2.name, student2.surName);
  console.log("Вік:", student2.calcAge());
  console.log("Середній бал:", student2.getMediumGrade());
  console.log("Відвідуваність:", student2.attendance);
  console.log("Сумарна оцінка:", student2.summary());