name_of_student_array=[];
function submit(){
  var display_student_array=[];
  for(var a=1;a<=4;a++){
    var name_student=document.getElementById("name_of_student_"+a).value;
    console.log(name_student);
    name_of_student_array.push(name_student);
  }
  console.log(name_of_student_array);
  var length_array=name_of_student_array.length;
  console.log(length_array);
  for(var s=0;s<length_array;s++){
    display_student_array.push("<h4>NAME-"+name_of_student_array[s]+"</h4>");
    console.log(display_student_array);
   
  }
  console.log(display_student_array);

    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove_commas=display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}