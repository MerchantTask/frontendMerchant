$(document).ready(function (){
    var companyId = localStorage.getItem('id');

    $("form.loginForm").on("submit",function(e){
        e.preventDefault();
        company_email=$("#company_email").val();
        password = $("#password").val();

        data ={
            "company_email":company_email,
            "password":password
        }
        $.ajax({
            url:'http://localhost:8000/merchant/login/',
            type:'post',
            dataType: 'json',
            data:data,

            success:function(res,textStatus,xhr){
                if (res.companyId !==null){
                    localStorage.setItem('companyId', res.id);

                    alert("login");
                    location.href = "index.html"
                }
                else{
                    alert(res.message);

                }
                
            },
            error: function (xhr, textStatus, errorThrown) {
                console.log('Error in Operation');
              }
        });
    });
});