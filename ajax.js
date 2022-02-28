//<div class="card" style="width: 18rem;">
{
  /* <img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div> */
}

$(".but").click(function () {
  $(".spin").show();
  $.ajax({
    // type: "method",
    url: "https://jsonplaceholder.typicode.com/albums",
    // data: "data",
    // dataType: "dataType",
    success: function (response) {
      console.log(response);
      // response = JSON.parse(response);
      response.forEach((element) => {
        let card = `<div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.userId}</h5>
                  <p class="card-text">${element.id}</p>
                  <a href="#" class="btn btn-primary">${element.title}</a>
                </div>
              </div>`;
        $(".main").append(card);
      });

      $(".spin").hide();
    },
  });
});

// 2 >>>>>> 

$.ajax({
  // type: "method",
  url: "/js.json",
  // data: "data",
  // dataType: "dataType",
  success: function (response) {
    console.log(response);
    // response = JSON.parse(response);
    // response.forEach((element) => {
    //   $(".pres").click(function () {
    //     let ht = `<p> ${element.id} ${element.firstName} ${element.lastName}  </p>`;
    //     $(".adder").append(element.i);
    //   });
    // });
    $(response).each((i,el) => {
      $('.pres').click(function(){
        let ht = `<p> ${el.id} ${el.firstName} ${el.lastName}  </p>`;
        $('.adder').append(ht);
        $('.pres').hide();
      })
    })
  },
});
