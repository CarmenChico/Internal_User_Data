import  $ from "jquery";

function getProfile() {
  return $.ajax ({
    url: "https://randomuser.me/api/?nat=us&results=12"
  });


};

// console.log("carmen");

function ExtractUser (user) {
  // console.log(user);
    user.results.map(function(data){
        // console.log(data);
          var pic= data.picture.large;
          var name = data.name;
          var fname = data.name.first;
          var lname = data.name.last;
          var email = data.email;
          var address = data.location;
          var street = data.location.street;
          var city = data.location.city;
          var state = data.location.state;
          var zip =data.location.postcode;
          var contact = data.cell;
          var ssn = data.id.value;
            // console.log(ssn);
          // console.log(pic);
          // console.log(name);
          // console.log(fname + lname);
            // console.log(email);
              // console.log(address);
                // console.log(contact);



          var userHTML = `
            <div class="user">

              <img src="${pic}">
              <div class="data">
                <div class="name">${ fname }  ${ lname }</div>
                <div class="email">
                  <span>${email}</span>
                </div>

                <div class="other">
                    <span> ${ street } </span><br>
                    <span>${ city },</span><span> ${ state }, </span><span> ${ zip } </span><br>
                    <span>${ contact }</span>
                </div>
                <div class="blur">
                  <span>${ssn}</span>
                </div>

              </div>

            </div>
             `;

          $(".users").append(userHTML);

    })
};



    export { getProfile, ExtractUser };

  // <span> ${ fname } </span><span>${ lname }</span>
