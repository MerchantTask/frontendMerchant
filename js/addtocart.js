  window.onload = function() {
    var urlParams = new URLSearchParams(window.location.search);
    const email = window.localStorage.getItem('email');
    const company_id = window.localStorage.getItem('company_id');
    const tok = window.localStorage.getItem("token")
    if (tok !== null){
    var id = urlParams.get("id");
    this.console.log(id);
    fetch('http://localhost:8000/getdata/'+ id,{
    }).then(data => {
        return data.json()
  }).then(data => {
           console.log(data);

           fetch('http://localhost:8000/Addtocart', {
            method: 'Post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              product_name:data.product_name,
              quantity:data.quantity,
              details:data.details,
              price:data.price,
              image : data.image,
              remarks:'pending',
              company_id: company_id
           
            })
        })
       
             .then(data => {
                      console.log(data);
                      alert("success");
                      window.location.href = 'getAddtocart.html';
                    
                    })

          
            })
          

      .catch(error => {
          console.log(error)
      })
    } else{
      window.location.href = "login.html"
    }
    }
