window.onload = function() {
    const tok = window.localStorage.getItem("token")
    if (tok !== null){
    fetch('http://localhost:8000/getProduct',{
    }).then(data => {
        return data.json()
    }).then(data=>{
        let details = '';
        const url = 'http://localhost:8000/uploads/';
        data.forEach(element => {
            details += `<div class="col-sm-3" data-div="${element._id}">
            <div class="thumb-wrapper">
                <div class="img-box">
                    <img src="${url+element.image}" class="img-responsive img-fluid" alt="">
                </div>
                <div class="thumb-content">
                    <h4>${element.product_name}</h4>
                    <p class="item-price"> <span>${element.price}</span></p>
                    <div class="star-rating">
                        <ul class="list-inline">
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star-half-o"></i></li>
                        </ul>
                    </div>
                    <a href="addtocart.html?id=${element._id}" >Add to Cart</a>
                </div>						
            </div>
        </div>`;
});
document.getElementById('detail').innerHTML = details;


})


.catch(error => {
console.log(error)
})
    }
    else{
        window.location.href = "login.html"
    }
}
