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

const template_imgurl = "https://raw.githubusercontent.com/narendnp/favygocard/master/assets/template.png";

var favDeck_name = "";
var favDeck_imgurl = "";

var favVanilla_name = "";
var favVanilla_imgurl = "";

var favEffect_name = "";
var favEffect_imgurl = "";

var favRitual_name = "";
var favRitual_imgurl = "";

var favFusion_name = "";
var favFusion_imgurl = "";

var favSynchro_name = "";
var favSynchro_imgurl = "";

var favXyz_name = "";
var favXyz_imgurl = "";

var favPendulum_name = "";
var favPendulum_imgurl = "";

var favLink_name = "";
var favLink_imgurl = "";

const corsProxy = "https://corsproxy.narendnp.workers.dev/?";
const apiEndpoint = "https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=";
const apiFetchURL = corsProxy + apiEndpoint;

var dataUrl = "";

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

// Create a reusable function for all card types
function createCardSearchHandler(inputElement, resultsElement, nameVar, imgUrlVar) {
  return debounce(function() {
    // Get the search term from the input field
    const searchTerm = this.value;
    
    // Encode the search term
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    
    // Make API request
    fetch(`${apiFetchURL}${encodedSearchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        // Create results list
        const list = document.createElement("ul");
        list.classList.add("list-group");
        
        if (Array.isArray(data.data)) {
          data.data.forEach((result) => {
            const item = document.createElement("li");
            item.classList.add("list-group-item");
            item.innerText = result.name;
            
            item.addEventListener("click", function() {
              const selectedItem = this.innerHTML;
              inputElement.value = selectedItem;
              resultsElement.innerHTML = "";
              
              // Save the card data to the appropriate variables
              window[nameVar] = result.name;
              window[imgUrlVar] = result.card_images[0].image_url;
              
              // Print the fetched card data to the console
              console.log(window[nameVar]);
              console.log(window[imgUrlVar]);
            });
            
            list.appendChild(item);
          });
        }
        
        // Clear and update results
        resultsElement.innerHTML = "";
        resultsElement.appendChild(list);
      });
  }, 500);
}

// Create debounced handlers using the reusable function
const debouncedFavDeckHandler = createCardSearchHandler(
  favDeckInput, 
  favDeckResults, 
  'favDeck_name', 
  'favDeck_imgurl'
);

const debouncedVanillaInputHandler = createCardSearchHandler(
  favVanillaInput, 
  favVanillaResults, 
  'favVanilla_name', 
  'favVanilla_imgurl'
);

const debouncedEffectInputHandler = createCardSearchHandler(
  favEffectInput, 
  favEffectResults, 
  'favEffect_name', 
  'favEffect_imgurl'
);

const debouncedRitualInputHandler = createCardSearchHandler(
  favRitualInput, 
  favRitualResults, 
  'favRitual_name', 
  'favRitual_imgurl'
);

const debouncedFusionInputHandler = createCardSearchHandler(
  favFusionInput, 
  favFusionResults, 
  'favFusion_name', 
  'favFusion_imgurl'
);

const debouncedSynchroInputHandler = createCardSearchHandler(
  favSynchroInput, 
  favSynchroResults, 
  'favSynchro_name', 
  'favSynchro_imgurl'
);

const debouncedXyzInputHandler = createCardSearchHandler(
  favXyzInput, 
  favXyzResults, 
  'favXyz_name', 
  'favXyz_imgurl'
);

const debouncedPendulumInputHandler = createCardSearchHandler(
  favPendulumInput, 
  favPendulumResults, 
  'favPendulum_name', 
  'favPendulum_imgurl'
);

const debouncedLinkInputHandler = createCardSearchHandler(
  favLinkInput, 
  favLinkResults, 
  'favLink_name', 
  'favLink_imgurl'
);

// Add an event listener to the each of the search input field that listens for the "input" event
// then call the respective debounce function
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
  const spinner = document.querySelector('.form-spinner');
  const backButton = document.getElementById('back-button');
  const generateButton = document.getElementById('generate-button');
  const downloadButton = document.getElementById('download-button');
  const inputForm = document.getElementById('input-form');

  spinner.classList.remove('hidden');
  inputForm.style.display = "none";
  generateButton.style.display = "none";
  backButton.classList.remove('hidden');
  downloadButton.classList.remove('hidden');

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
  };

  function loadImages(sources, callback) {
    var images = {};
    var loadedImages = 0;
    var numImages = 0;

    for (var src in sources) {
      numImages++;
    }

    for (var src in sources) {
      images[src] = new Image();
      images[src].crossOrigin = "anonymous";
      images[src].onload = function () {
        if (++loadedImages >= numImages) {
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
          
          spinner.classList.add('hidden');
        }
      };
      images[src].onerror = function() {
        spinner.classList.add('hidden');
        console.error('Error loading image:', src);
      };
      images[src].src = corsProxy + sources[src];
    }
  }

  canvasResults.appendChild(canvas);
  loadImages(sources);
}

function clearInput() {
  const spinner = document.querySelector('.form-spinner');
  const backButton = document.getElementById('back-button');
  const generateButton = document.getElementById('generate-button');
  const downloadButton = document.getElementById('download-button');
  const inputForm = document.getElementById('input-form');

  spinner.classList.add('hidden');
  inputForm.style.display = "block";
  generateButton.style.display = "inline";
  backButton.classList.add('hidden');
  downloadButton.classList.add('hidden');
  document.getElementById("input-form").reset();
  canvasResults.innerHTML = "";
}

function showForm() {
  const spinner = document.querySelector('.form-spinner');
  const backButton = document.getElementById('back-button');
  const generateButton = document.getElementById('generate-button');
  const downloadButton = document.getElementById('download-button');
  const inputForm = document.getElementById('input-form');

  spinner.classList.add('hidden');
  inputForm.style.display = "block";
  generateButton.style.display = "inline";
  backButton.classList.add('hidden');
  downloadButton.classList.add('hidden');
  canvasResults.innerHTML = "";
}

function downloadImage() {
  var canvas = document.getElementById("canvas-data");
  var dataUrl = canvas.toDataURL("image/png");
  var tmpLink = document.createElement("a");
  tmpLink.download = "favygocard.png";
  tmpLink.href = dataUrl;
  document.body.appendChild(tmpLink);
  tmpLink.click();
  document.body.removeChild(tmpLink);
}
