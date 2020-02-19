window.onload = function() {
    // const email = window.localStorage.getItem('email');
    const company_id = window.localStorage.getItem('company_id');

	const tok = window.localStorage.getItem("token")
    if (tok !== null){
    fetch('http://localhost:8000/getAddtocart/' + company_id ,{
     
    }).then(data => {
      return data.json()
  })
  .then(data => {
    let detail = '';
    const url = 'http://localhost:8000/uploads/';
    data.forEach(element => {
      
    detail += `<div class="col-sm-3" data-div="${element._id}">
    							<div class="thumb-wrapper">
    								<div class="img-box">
    									<img src="${url+element.image}" class="img-responsive img-fluid" alt="">
    								</div>
    								<div class="thumb-content">
    									<h4>${element.product_name}</h4>
                                        <p class="item-price"> <span>price : Rs ${element.price}</span></p>
                                        <p class="item-price"> <span>Quantity : ${element.quantity}</span></p>
    									<p class="item-price"> <span>Details : ${element.details}</span></p>

    									<div class="star-rating">
    										<ul class="list-inline">
    											<li class="list-inline-item"><i class="fa fa-star"></i></li>
    											<li class="list-inline-item"><i class="fa fa-star"></i></li>
    											<li class="list-inline-item"><i class="fa fa-star"></i></li>
    											<li class="list-inline-item"><i class="fa fa-star"></i></li>
    											<li class="list-inline-item"><i class="fa fa-star-half-o"></i></li>
    										</ul>
    									</div>
    									<a href="buy.html?${element.id}" >Buy</a>
    								</div>						
    							</div>
    						</div>`;
              });
                document.getElementById('Addtocart').innerHTML = detail;
           
          
            })
          
		}else{
			window.location.href = "login.html"
		}
      
    }
