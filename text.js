<html>
<form action="" method="post" name="register_form" id="register_form" enctype="multipart/form-data">

    <div class="text-input">
        <label>Gender: </label>
        <input class="form-control" type="radio" name="gender" id="male" value="male" />
        <label for="male">Male</label>
        <input class="form-control" type="radio" name="gender" id="female" value="female" />
        <label for="female">Female</label>
    </div>
    <div class="text-input" align="center">
        <input type="submit" name="register" value="Submit" onclick="return radioValidation();" />
    </div>

</form>

<script type="text/javascript">
 function radioValidation(){
 
  var gender = document.getElementsByName('gender');
  var genValue = false;
  
  for(var i=0; i<gender.length;i++){
   if(gender[i].checked == true){
    genValue = true; 
   }
  }
  if(!genValue){
   alert("Please Choose the gender");
   return false;
  }
  
 }
</script>
</html>