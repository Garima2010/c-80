var Name_of_the_guest_array = [];
function Submit() {
    var Guest_name = document.getElementById("Enter_name").value;
    Name_of_the_guest_array.push(Guest_name);
    document.getElementById("Display_names").innerHTML = Name_of_the_guest_array;
    console.log(Name_of_the_guest_array);
}
function Show_list() {
    var i = Name_of_the_guest_array.join("<br>");
    console.log(Name_of_the_guest_array);
document.getElementById("Show_names").innerHTML = i.toString();
}
function sorting()
{
    Name_of_the_guest_array.sort();
    var i =Name_of_the_guest_array.join("<br>");
    console.log(Name_of_the_guest_array);
    document.getElementById("Show_names").innerHTML = i.toString();
}
function Search() {
    var s = document.getElementById("Search_name").value;
    var found = 0;
    var j;
    for (j=0; j<Name_of_the_guest_array.length; j++){
        if(s==Name_of_the_guest_array[j]){
            found=found+1;
        }
    }
        document.getElementById("S1").innerHTML="Name Found" +found+"Time/s";
        console.log("Found Name" +found+ "Time/s");
    }
