

async function app() {
  var net;
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById('img');
  const result = await net.classify(imgEl);
  document.getElementById('console').innerHTML = result[0].className;
  console.log(result);
}

$("input[type=file]").on('change',function(){
    image = this.files[0].name;
    console.log(image);
    document.getElementById("img").src= image;
    app();
});