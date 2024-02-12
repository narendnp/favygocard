// Get a reference to the search form, search input, and search results container elements
const canvasResults = document.querySelector("#canvas-results");

const favDeckInput = document.querySelector("#search-favDeck");
const favDeckResults = document.querySelector("#favDeck-results");

const favVanillaInput = document.querySelector("#search-favVanilla");
const favVanillaResults = document.querySelector("#favVanilla-results");

const favEffectInput = document.querySelector("#search-favEffect");
const favEffectResults = document.querySelector("#favEffect-results");

const favRitualInput = document.querySelector("#search-favRitual");
const favRitualResults = document.querySelector("#favRitual-results");

const favFusionInput = document.querySelector("#search-favFusion");
const favFusionResults = document.querySelector("#favFusion-results");

const favSynchroInput = document.querySelector("#search-favSynchro");
const favSynchroResults = document.querySelector("#favSynchro-results");

const favXyzInput = document.querySelector("#search-favXyz");
const favXyzResults = document.querySelector("#favXyz-results");

const favPendulumInput = document.querySelector("#search-favPendulum");
const favPendulumResults = document.querySelector("#favPendulum-results");

const favLinkInput = document.querySelector("#search-favLink");
const favLinkResults = document.querySelector("#favLink-results");

const template_imgurl = "assets/template.png"; // Filename/URL of the template image

var favDeck_name = this.value;
var favDeck_imgurl = this.value;

var favVanilla_name = this.value;
var favVanilla_imgurl = this.value;

var favEffect_name = this.value;
var favEffect_imgurl = this.value;

var favRitual_name = this.value;
var favRitual_imgurl = this.value;

var favFusion_name = this.value;
var favFusion_imgurl = this.value;

var favSynchro_name = this.value;
var favSynchro_imgurl = this.value;

var favXyz_name = this.value;
var favXyz_imgurl = this.value;

var favPendulum_name = this.value;
var favPendulum_imgurl = this.value;

var favLink_name = this.value;
var favLink_imgurl = this.value;

// Function to delete a search result element
function deleteSearchResult(element) {
  element.remove();
}

// Click-away listener function
function clickAwayListener(event) {
  const clickedElement = event.target;

  // Check if the clicked element is outside the searchResults container
  if (!favDeckResults.contains(clickedElement)) {
    favDeckResults.innerHTML = "";
  }
  if (!favVanillaResults.contains(clickedElement)) {
    favVanillaResults.innerHTML = "";
  }
  if (!favEffectResults.contains(clickedElement)) {
    favEffectResults.innerHTML = "";
  }
  if (!favRitualResults.contains(clickedElement)) {
    favRitualResults.innerHTML = "";
  }
  if (!favFusionResults.contains(clickedElement)) {
    favFusionResults.innerHTML = "";
  }
  if (!favSynchroResults.contains(clickedElement)) {
    favSynchroResults.innerHTML = "";
  }
  if (!favXyzResults.contains(clickedElement)) {
    favXyzResults.innerHTML = "";
  }
  if (!favPendulumResults.contains(clickedElement)) {
    favPendulumResults.innerHTML = "";
  }
  if (!favLinkResults.contains(clickedElement)) {
    favLinkResults.innerHTML = "";
  }
}

// Add a click event listener to the document
document.addEventListener("click", clickAwayListener);

function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const debouncedFavDeckHandler = debounce(function () {
  // Get the search term from the input field
  const searchTerm = this.value;

  // Encode the search term using the encodeURIComponent() function
  const encodedSearchTerm = encodeURIComponent(searchTerm);

  // Make an API request to the ygoprodeck API
  fetch(
    `https://corsproxy.narendnp.workers.dev/?https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodedSearchTerm}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Handle the API response
      // Create a <ul> element to hold the search results
      const list = document.createElement("ul");
      list.classList.add("list-group");

      // Check if the data variable is an array
      if (Array.isArray(data.data)) {
        // Loop through the search results and create a <li> element for each result
        data.data.forEach((result) => {
          // console.log(result);
          const item = document.createElement("li");
          item.classList.add("list-group-item");

          // Set the text of the <li> element to the "name" property of the result
          item.innerText = result.name;

          // Add a click event listener to the <li> element that saves the selected item to a variable
          item.addEventListener("click", function () {
            selectedItem = this.innerHTML;
            document.getElementById("search-favDeck").value = selectedItem;
            favDeckResults.innerHTML = "";
            // Save the "name" property for later use
            favDeck_name = result.name;
            console.log(favDeck_name);
            // Save the "image_url" property for later use
            favDeck_imgurl = result.card_images[0].image_url;
            // favDeck_imgurl.crossOrigin = "anonymous";
            console.log(favDeck_imgurl);
          });

          list.appendChild(item);
        });
      }

      // Clear the search results container
      favDeckResults.innerHTML = "";

      // Add the <ul> element to the search results container
      favDeckResults.appendChild(list);
    });
}, 500);

const debouncedVanillaInputHandler = debounce(function () {
    // Get the search term from the input field
    const searchTerm = this.value;

    // Encode the search term using the encodeURIComponent() function
    const encodedSearchTerm = encodeURIComponent(searchTerm);

    // Make an API request to the ygoprodeck API
    fetch(
      `https://corsproxy.narendnp.workers.dev/?https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodedSearchTerm}`
    )
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response
        // Create a <ul> element to hold the search results
        const list = document.createElement("ul");
        list.classList.add("list-group");

        // Check if the data variable is an array
        if (Array.isArray(data.data)) {
          // Loop through the search results and create a <li> element for each result
          data.data.forEach((result) => {
            // console.log(result);
            const item = document.createElement("li");
            item.classList.add("list-group-item");

            // Set the text of the <li> element to the "name" property of the result
            item.innerText = result.name;

            // Add a click event listener to the <li> element that saves the selected item to a variable
            item.addEventListener("click", function () {
              selectedItem = this.innerHTML;
              document.getElementById("search-favVanilla").value = selectedItem;
              favVanillaResults.innerHTML = "";
              // Save the "name" property for later use
              favVanilla_name = result.name;
              console.log(favVanilla_name);
              // Save the "image_url" property for later use
              favVanilla_imgurl = result.card_images[0].image_url;
              // favVanilla_imgurl.crossOrigin = "anonymous";
              console.log(favVanilla_imgurl);
            });

            list.appendChild(item);
          });
        }

        // Clear the search results container
        favVanillaResults.innerHTML = "";

        // Add the <ul> element to the search results container
        favVanillaResults.appendChild(list);
      });
}, 500);

const debouncedEffectInputHandler = debounce(function () {
// Get the search term from the input field
const searchTerm = this.value;

// Encode the search term using the encodeURIComponent() function
const encodedSearchTerm = encodeURIComponent(searchTerm);

// Make an API request to the ygoprodeck API
fetch(
  `https://corsproxy.narendnp.workers.dev/?https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodedSearchTerm}`
)
  .then((response) => response.json())
  .then((data) => {
    // Handle the API response
    // Create a <ul> element to hold the search results
    const list = document.createElement("ul");
    list.classList.add("list-group");

    // Check if the data variable is an array
    if (Array.isArray(data.data)) {
      // Loop through the search results and create a <li> element for each result
      data.data.forEach((result) => {
        // console.log(result);
        const item = document.createElement("li");
        item.classList.add("list-group-item");

        // Set the text of the <li> element to the "name" property of the result
        item.innerText = result.name;

        // Add a click event listener to the <li> element that saves the selected item to a variable
        item.addEventListener("click", function () {
          selectedItem = this.innerHTML;
          document.getElementById("search-favEffect").value = selectedItem;
          favEffectResults.innerHTML = "";
          // Save the "name" property for later use
          favEffect_name = result.name;
          console.log(favEffect_name);
          // Save the "image_url" property for later use
          favEffect_imgurl = result.card_images[0].image_url;
          // favEffect_imgurl.crossOrigin = "anonymous";
          console.log(favEffect_imgurl);
        });

        list.appendChild(item);
      });
    }

    // Clear the search results container
    favEffectResults.innerHTML = "";

    // Add the <ul> element to the search results container
    favEffectResults.appendChild(list);
  });
}, 500);

const debouncedRitualInputHandler = debounce(function () {
// Get the search term from the input field
const searchTerm = this.value;

// Encode the search term using the encodeURIComponent() function
const encodedSearchTerm = encodeURIComponent(searchTerm);

// Make an API request to the ygoprodeck API
fetch(
  `https://corsproxy.narendnp.workers.dev/?https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodedSearchTerm}`
)
  .then((response) => response.json())
  .then((data) => {
    // Handle the API response
    // Create a <ul> element to hold the search results
    const list = document.createElement("ul");
    list.classList.add("list-group");

    // Check if the data variable is an array
    if (Array.isArray(data.data)) {
      // Loop through the search results and create a <li> element for each result
      data.data.forEach((result) => {
        // console.log(result);
        const item = document.createElement("li");
        item.classList.add("list-group-item");

        // Set the text of the <li> element to the "name" property of the result
        item.innerText = result.name;

        // Add a click event listener to the <li> element that saves the selected item to a variable
        item.addEventListener("click", function () {
          selectedItem = this.innerHTML;
          document.getElementById("search-favRitual").value = selectedItem;
          favRitualResults.innerHTML = "";
          // Save the "name" property for later use
          favRitual_name = result.name;
          console.log(favRitual_name);
          // Save the "image_url" property for later use
          favRitual_imgurl = result.card_images[0].image_url;
          // favRitual_imgurl.crossOrigin = "anonymous";
          console.log(favRitual_imgurl);
        });

        list.appendChild(item);
      });
    }

    // Clear the search results container
    favRitualResults.innerHTML = "";

    // Add the <ul> element to the search results container
    favRitualResults.appendChild(list);
  });
}, 500);

const debouncedFusionInputHandler = debounce(function () {
// Get the search term from the input field
const searchTerm = this.value;

// Encode the search term using the encodeURIComponent() function
const encodedSearchTerm = encodeURIComponent(searchTerm);

// Make an API request to the ygoprodeck API
fetch(
  `https://corsproxy.narendnp.workers.dev/?https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodedSearchTerm}`
)
  .then((response) => response.json())
  .then((data) => {
    // Handle the API response
    // Create a <ul> element to hold the search results
    const list = document.createElement("ul");
    list.classList.add("list-group");

    // Check if the data variable is an array
    if (Array.isArray(data.data)) {
      // Loop through the search results and create a <li> element for each result
      data.data.forEach((result) => {
        // console.log(result);
        const item = document.createElement("li");
        item.classList.add("list-group-item");

        // Set the text of the <li> element to the "name" property of the result
        item.innerText = result.name;

        // Add a click event listener to the <li> element that saves the selected item to a variable
        item.addEventListener("click", function () {
          selectedItem = this.innerHTML;
          document.getElementById("search-favFusion").value = selectedItem;
          favFusionResults.innerHTML = "";
          // Save the "name" property for later use
          favFusion_name = result.name;
          console.log(favFusion_name);
          // Save the "image_url" property for later use
          favFusion_imgurl = result.card_images[0].image_url;
          // favFusion_imgurl.crossOrigin = "anonymous";
          console.log(favFusion_imgurl);
        });

        list.appendChild(item);
      });
    }

    // Clear the search results container
    favFusionResults.innerHTML = "";

    // Add the <ul> element to the search results container
    favFusionResults.appendChild(list);
  });
}, 500);

const debouncedSynchroInputHandler = debounce(function () {
// Get the search term from the input field
const searchTerm = this.value;

// Encode the search term using the encodeURIComponent() function
const encodedSearchTerm = encodeURIComponent(searchTerm);

// Make an API request to the ygoprodeck API
fetch(
  `https://corsproxy.narendnp.workers.dev/?https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodedSearchTerm}`
)
  .then((response) => response.json())
  .then((data) => {
    // Handle the API response
    // Create a <ul> element to hold the search results
    const list = document.createElement("ul");
    list.classList.add("list-group");

    // Check if the data variable is an array
    if (Array.isArray(data.data)) {
      // Loop through the search results and create a <li> element for each result
      data.data.forEach((result) => {
        // console.log(result);
        const item = document.createElement("li");
        item.classList.add("list-group-item");

        // Set the text of the <li> element to the "name" property of the result
        item.innerText = result.name;

        // Add a click event listener to the <li> element that saves the selected item to a variable
        item.addEventListener("click", function () {
          selectedItem = this.innerHTML;
          document.getElementById("search-favSynchro").value = selectedItem;
          favSynchroResults.innerHTML = "";
          // Save the "name" property for later use
          favSynchro_name = result.name;
          console.log(favSynchro_name);
          // Save the "image_url" property for later use
          favSynchro_imgurl = result.card_images[0].image_url;
          // favSynchro_imgurl.crossOrigin = "anonymous";
          console.log(favSynchro_imgurl);
        });

        list.appendChild(item);
      });
    }

    // Clear the search results container
    favSynchroResults.innerHTML = "";

    // Add the <ul> element to the search results container
    favSynchroResults.appendChild(list);
  });
}, 500);

const debouncedXyzInputHandler = debounce(function () {
// Get the search term from the input field
const searchTerm = this.value;

// Encode the search term using the encodeURIComponent() function
const encodedSearchTerm = encodeURIComponent(searchTerm);

// Make an API request to the ygoprodeck API
fetch(
  `https://corsproxy.narendnp.workers.dev/?https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodedSearchTerm}`
)
  .then((response) => response.json())
  .then((data) => {
    // Handle the API response
    // Create a <ul> element to hold the search results
    const list = document.createElement("ul");
    list.classList.add("list-group");

    // Check if the data variable is an array
    if (Array.isArray(data.data)) {
      // Loop through the search results and create a <li> element for each result
      data.data.forEach((result) => {
        // console.log(result);
        const item = document.createElement("li");
        item.classList.add("list-group-item");

        // Set the text of the <li> element to the "name" property of the result
        item.innerText = result.name;

        // Add a click event listener to the <li> element that saves the selected item to a variable
        item.addEventListener("click", function () {
          selectedItem = this.innerHTML;
          document.getElementById("search-favXyz").value = selectedItem;
          favXyzResults.innerHTML = "";
          // Save the "name" property for later use
          favXyz_name = result.name;
          console.log(favXyz_name);
          // Save the "image_url" property for later use
          favXyz_imgurl = result.card_images[0].image_url;
          // favXyz_imgurl.crossOrigin = "anonymous";
          console.log(favXyz_imgurl);
        });

        list.appendChild(item);
      });
    }

    // Clear the search results container
    favXyzResults.innerHTML = "";

    // Add the <ul> element to the search results container
    favXyzResults.appendChild(list);
  });
}, 500);

const debouncedPendulumInputHandler = debounce(function () {
// Get the search term from the input field
const searchTerm = this.value;

// Encode the search term using the encodeURIComponent() function
const encodedSearchTerm = encodeURIComponent(searchTerm);

// Make an API request to the ygoprodeck API
fetch(
  `https://corsproxy.narendnp.workers.dev/?https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodedSearchTerm}`
)
  .then((response) => response.json())
  .then((data) => {
    // Handle the API response
    // Create a <ul> element to hold the search results
    const list = document.createElement("ul");
    list.classList.add("list-group");

    // Check if the data variable is an array
    if (Array.isArray(data.data)) {
      // Loop through the search results and create a <li> element for each result
      data.data.forEach((result) => {
        // console.log(result);
        const item = document.createElement("li");
        item.classList.add("list-group-item");

        // Set the text of the <li> element to the "name" property of the result
        item.innerText = result.name;

        // Add a click event listener to the <li> element that saves the selected item to a variable
        item.addEventListener("click", function () {
          selectedItem = this.innerHTML;
          document.getElementById("search-favPendulum").value = selectedItem;
          favPendulumResults.innerHTML = "";
          // Save the "name" property for later use
          favPendulum_name = result.name;
          console.log(favPendulum_name);
          // Save the "image_url" property for later use
          favPendulum_imgurl = result.card_images[0].image_url;
          // favPendulum_imgurl.crossOrigin = "anonymous";
          console.log(favPendulum_imgurl);
        });

        list.appendChild(item);
      });
    }

    // Clear the search results container
    favPendulumResults.innerHTML = "";

    // Add the <ul> element to the search results container
    favPendulumResults.appendChild(list);
  });
}, 500);

const debouncedLinkInputHandler = debounce(function () {
  // Get the search term from the input field
  const searchTerm = this.value;

  // Encode the search term using the encodeURIComponent() function
  const encodedSearchTerm = encodeURIComponent(searchTerm);

  // Make an API request to the ygoprodeck API
  fetch(
    `https://corsproxy.narendnp.workers.dev/?https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${encodedSearchTerm}`
  )
    .then((response) => response.json())
    .then((data) => {
      // Handle the API response
      // Create a <ul> element to hold the search results
      const list = document.createElement("ul");
      list.classList.add("list-group");

      // Check if the data variable is an array
      if (Array.isArray(data.data)) {
        // Loop through the search results and create a <li> element for each result
        data.data.forEach((result) => {
          // console.log(result);
          const item = document.createElement("li");
          item.classList.add("list-group-item");

          // Set the text of the <li> element to the "name" property of the result
          item.innerText = result.name;

          // Add a click event listener to the <li> element that saves the selected item to a variable
          item.addEventListener("click", function () {
            selectedItem = this.innerHTML;
            document.getElementById("search-favLink").value = selectedItem;
            favLinkResults.innerHTML = "";
            // Save the "name" property for later use
            favLink_name = result.name;
            console.log(favLink_name);
            // Save the "image_url" property for later use
            favLink_imgurl = result.card_images[0].image_url;
            // favLink_imgurl.crossOrigin = "anonymous";
            console.log(favLink_imgurl);
          });

          list.appendChild(item);
        });
      }

      // Clear the search results container
      favLinkResults.innerHTML = "";

      // Add the <ul> element to the search results container
      favLinkResults.appendChild(list);
    });
}, 500);

// Add an event listener to the each of the search input field that listens for the "input" event
// Then call the respective debounce function
if (favDeckInput) {
  favDeckInput.addEventListener("input", debouncedFavDeckHandler);
}

if (favVanillaInput) {
  favVanillaInput.addEventListener("input", debouncedVanillaInputHandler);
}

if (favEffectInput) {
  favEffectInput.addEventListener("input", debouncedEffectInputHandler);
}

if (favRitualInput) {
  favRitualInput.addEventListener("input", debouncedRitualInputHandler);
}

if (favFusionInput) {
  favFusionInput.addEventListener("input", debouncedFusionInputHandler);
}

if (favSynchroInput) {
  favSynchroInput.addEventListener("input", debouncedSynchroInputHandler);
}

if (favXyzInput) {
  favXyzInput.addEventListener("input", debouncedXyzInputHandler);
}

if (favPendulumInput) {
  favPendulumInput.addEventListener("input", debouncedPendulumInputHandler);
}

if (favLinkInput) {
  favLinkInput.addEventListener("input", debouncedLinkInputHandler);
}

var canvas = document.createElement("canvas");
canvas.setAttribute("id", "canvas-data");

function generateImage() {
  canvasResults.innerHTML = "";

  function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;
    // get num of sources
    for (var src in sources) {
      numImages++;
    }
    for (var src in sources) {
      images[src] = new Image();
      images[src].onload = function () {
        if (++loadedImages >= numImages) {
          callback(images);
        }
      };
      // images[src].crossOrigin = "anonymous";
      images[src].src = sources[src];
    }
  }

  // var canvas = document.createElement('canvas');
  var context = canvas.getContext("2d");
  canvas.width = 640;
  canvas.height = 920;

  var sources = {
    img0: template_imgurl,
    img1: favDeck_imgurl,
    img2: favVanilla_imgurl,
    img3: favEffect_imgurl,
    img4: favRitual_imgurl,
    img5: favFusion_imgurl,
    img6: favSynchro_imgurl,
    img7: favXyz_imgurl,
    img8: favPendulum_imgurl,
    img9: favLink_imgurl,
    // img0: template_imgurl,
    // img1: "https://images.ygoprodeck.com/images/cards/48680970.jpg",
    // img2: "https://images.ygoprodeck.com/images/cards/46986414.jpg",
    // img3: "https://images.ygoprodeck.com/images/cards/97631303.jpg",
    // img4: "https://images.ygoprodeck.com/images/cards/12266229.jpg",
    // img5: "https://images.ygoprodeck.com/images/cards/37818794.jpg",
    // img6: "https://images.ygoprodeck.com/images/cards/84815190.jpg",
    // img7: "https://images.ygoprodeck.com/images/cards/85551711.jpg",
    // img8: "https://images.ygoprodeck.com/images/cards/3611830.jpg",
    // img9: "https://images.ygoprodeck.com/images/cards/41999284.jpg"
  };

  // drawImage(image, dx, dy, dWidth, dHeight)
  // 420 width, 614 height

  // for (let index = 0; index < bound; index++) {
  //   sources[index]
  // }
  loadImages(sources, function (images) {
    context.drawImage(images.img0, 0, 0);
    context.drawImage(images.img1, 29, 58, 156, 227);
    context.drawImage(images.img2, 242, 58, 156, 227);
    context.drawImage(images.img3, 455, 58, 156, 227);
    context.drawImage(images.img4, 29, 366, 156, 227);
    context.drawImage(images.img5, 242, 366, 156, 227);
    context.drawImage(images.img6, 455, 366, 156, 227);
    context.drawImage(images.img7, 29, 671, 156, 227);
    context.drawImage(images.img8, 242, 671, 156, 227);
    context.drawImage(images.img9, 455, 671, 156, 227);
  });

  canvasResults.appendChild(canvas);
  document.getElementById("input-form").style.display = "none";
  document.getElementById("generate-button").style.display = "none";
  // document.getElementById("download-button").style.display = 'inline';
}

function clearInput() {
  document.getElementById("input-form").reset();
  document.getElementById("input-form").style.display = "block";
  document.getElementById("generate-button").style.display = "inline";
  // document.getElementById("download-button").style.display = 'none';
  canvasResults.innerHTML = "";
}

function downloadImage() {
  var canvas = document.getElementById("canvas-data");

  // get canvas data
  var image = new Image();
  image.crossOrigin = "anonymous";

  image = canvas.toDataURL("image/png");
  // image.setAttribute('crossOrigin', 'anonymous');

  // create temporary link
  var tmpLink = document.createElement("a");
  tmpLink.download = "image.png"; // set the name of the download file
  tmpLink.href = image;

  // temporarily add link to body and initiate the download
  document.body.appendChild(tmpLink);
  tmpLink.click();
}
