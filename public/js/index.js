// eslint-disable-next-line prettier/prettier
let breeders = $("#breeders");
let breeds = $("#breeds");
let litters = $("#litters");
let groups = $("#groups");

let addBreeder = $("add-breeder");

// The API object contains methods for each kind of request we'll make
var API = {
  breederTable: function(breeders) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/breeders",
      data: JSON.stringify(breeders)
    });
  },
  getBreeders: function() {
    return $.ajax({
      url: "/api/breeders",
      type: "GET"
    });
  },

  getBreeds: function() {
    return $.ajax({
      url: "/api/breeders/:breed",
      type: "GET"
    });
  },

  getLitters: function() {
    return $.ajax({
      url: "/api/breeders/:litters",
      type: "GET"
    });
  },

  getLitters: function() {
    return $.ajax({
      url: "/api/breeders/:group",
      type: "GET"
    });
  }

  // deleteExample: function(id) {
  //   return $.ajax({
  //     url: "api/examples/" + id,
  //     type: "DELETE"
  //   });
  // }
};

// refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

addBreeder.on("click", function() {
  return $.ajax({
    url: "/add-breeder",
    type: "GET"
  });
});
// Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
