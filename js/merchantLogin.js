$(document).ready(function (){
   
    $("form.loginForm").on("submit",function(e){
        e.preventDefault();
        company_name=$("#company_name").val();
        password = $("#password").val();
       

        data ={
            "company_name":company_name,
            "password":password
        }
        $.ajax({
            url:'http://localhost:8000/Company/login/',
            type:'post',
            dataType: 'json',
            data:data,

            success:function(res,textStatus,xhr){
                if (res.token != null) {
                    if(res.loginattempt>0){
                        localStorage.setItem('token_merchant', res.token);
                    localStorage.setItem('company_id',res.id);
                  
                      location.href = "index.html";
                    }else{
                        localStorage.setItem('token_merchant', res.token);
                    localStorage.setItem('company_id',res.id);
                        location.href = "changepassword.html";
                    }
                    
                   
      
                  }
                  else {
                    alert(res.message);
                  }
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log('Error in Operation');
              }
        });
    });
});