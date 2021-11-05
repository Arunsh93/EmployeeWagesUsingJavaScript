//UC1
{
const IS_ABSENT=0

let empCheck=Math.floor(Math.random()*10)%2;

if(empCheck==IS_ABSENT)
{
    console.log("UC1-Employee is Absent");
}else{
    console.log("UC1-Employee is Present");
}
}

//UC2
{
const IS_ABSENT=0
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
const NUM_OF_WORKING_DAYS=2; 
let empHrs = 0;

let empCheck=Math.floor(Math.random()*10)%3;

switch(empCheck)
{
    case IS_PART_TIME:
            empHrs = IS_PART_TIME;
            break;
    case IS_FULL_TIME:
            empHrs = IS_FULL_TIME;
            break;
    default:
        empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("UC2-Employee Wage is: " + empWage);
}

//UC3-Using Functions
function getWorkingHours(empCheck)
{
    const IS_ABSENT=0
    const IS_PART_TIME=1;
    const IS_FULL_TIME=2;
    const PART_TIME_HOURS=4;
    const FULL_TIME_HOURS=8;
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0; 
    }
}
{
    const WAGE_PER_HOUR=20;
    const NUM_OF_WORKING_DAYS=2; 
    let empHrs = 0;
    let empCheck = Math.floor(Math.random()*10)%3;
    empHrs = getWorkingHours(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("UC3 - Hours: " + empHrs + " Emp Wage: " + empWage);
}

//UC4
 let totalEmpHrs=0;
 const WAGE_PER_HOUR=20;
 const NUM_OF_WORKING_DAYS=2; 
 for(let day=0;day<NUM_OF_WORKING_DAYS;day++)
 {
   let empCheck=Math.floor(Math.random()*10)%3;
   totalEmpHrs+=getWorkingHours(empCheck);
 }

 // UC 5
 
{
    const MAX_HRS_IN_MONTH=160;
    const NUM_OF_WORKING_DAYS=20;
    let totalEmpHrs=0;
    
    let totalWorkingDays=0;
    while(totalEmpHrs <= MAX_HRS_IN_MONTH && 
          totalWorkingDays < NUM_OF_WORKING_DAYS)
    {
       totalWorkingDays++;
       let empCheck = Math.floor(Math.random()*10)%3;
       totalEmpHrs+=getWorkingHours(empCheck);
    }
   let empWage = totalEmpHrs*WAGE_PER_HOUR;
   console.log("UC5 - Total Days: "+totalWorkingDays+
   " Total Hrs: "+totalEmpHrs+" Emp Wage: "+empWage); 
}
 
 empWage=totalEmpHrs*WAGE_PER_HOUR;
 console.log("UC-4 Hour: "+totalEmpHrs+" Emp Wage: "+empWage);