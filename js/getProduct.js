window.onload = function() {
    const tok = window.localStorage.getItem("token_merchant")
    const merchant_id = window.localStorage.getItem("company_id")
    if (tok !== null){
    fetch('http://localhost:8000/getmerchantProduct/'+merchant_id,{
    }).then(data => {
        return data.json()
    }).then(data=>{
        let details = '';
        const url = 'http://localhost:8000/uploads/';
        data.forEach(element => {
            details += `  
             <div class="col-lg-3 col-sm-6 mix all dresses bags" data-div="${element._id}">
            <div class="single-product-item">
                <figure>
                    <a href="#"><img src="${url+element.image}" alt="" height="300px"  width="50px"/></a>
                    <div class="p-status">Rs ${element.price}</div>
                </figure>
                <div class="product-text">
                    <h6>${element.product_name}</h6>
                    <p>Quantity: ${element.quantity}</p>
                    <p>Details: ${element.details}</p>
                    
					<input type="submit" value="Remove" id="remove" onclick="removeproduct('${element._id}')"> 
                </div>
            </div>
        </div>`
        
     
        
        
        
        ;
});
document.getElementById('productlist').innerHTML = details;


})


.catch(error => {
console.log(error)
})
    }
    else{
        window.location.href = "login.html"
    }
}
