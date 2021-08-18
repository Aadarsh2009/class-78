var images = ["IMG_20210611_232652 (1).jpg",  "IMG_20210611_164127 (1).jpg", "IMG_20210611_010707 (1).jpg", "IMG20210610192820 (1).jpg"];
var names = ["Fmaily Book","Aadarsh Rath", "Kalpana Rath", "Raghunath Rath"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }

    var updatedImage = [images];
    var updatedName = [names] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
