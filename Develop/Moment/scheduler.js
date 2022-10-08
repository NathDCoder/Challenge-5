let timeDisplayEl = $('#currentTime');
let textAreaTime = $("#description")

let rightNow = moment().format('MMMM Do YYYY, h:mm a');

function displayTime() {
    timeDisplayEl.text(rightNow);
  }
  setInterval(displayTime, 1000);

   //ParseInt momentJs to compare to current time
   //If conditions
   //temporal literals   
   //Classtlist to add css coloring 

 
// function CompareDate() {
//     let currentTime = new Date();
//     let startTime = new Date();
//       startTime.setHours(1,00);
//     let endTime = new Date(3,00);    
//       endTime.setHours()   
//   if (currentTime > startTime) {
//     $(".description").addClass("present")  
//   } else if (currentTime <= endTime){
//     $(".description").addClass("future")  
//   } else if (currentTime < startTime){
//     $(".description").addClass("past") 
//   }
// } 
//   CompareDate()

  $(document).ready(function(){
    $(".saveBtn").on("click",function(){
      let time = $(this).parent().attr("id");
      let value  = $(this).siblings(".description").val();
      localStorage.setItem(time, value);
    });
   
   
    function CompareDate() {
    let currentTime = moment().hours();
    console.log(currentTime)
    $(".hour").each(function(){
      let blockHour = $(this).attr("id");
      if (currentTime > blockHour) {
        $(this).addClass("past");  
      } else if (currentTime == blockHour){
        $(this).addClass("present");
        $(this).removeClass("past");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });


  } 
  CompareDate();
  $('#9 .description').val(localStorage.getItem('9'));
  $('#10 .description').val(localStorage.getItem('10'));
  $('#11 .description').val(localStorage.getItem('11'));
  $('#12 .description').val(localStorage.getItem('12'));
  $('#13 .description').val(localStorage.getItem('13'));
  $('#14 .description').val(localStorage.getItem('14'));
  $('#15 .description').val(localStorage.getItem('15'));
  $('#16 .description').val(localStorage.getItem('16'));
  $('#17 .description').val(localStorage.getItem('17'));
  }); console.log(localStorage)