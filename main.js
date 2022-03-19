import "./style.css";
const webcamElement = document.getElementById("webcam");
const predict = async function (image) {
  console.log(tf.image.resizeBilinear(image, [145, 145]));
  if (window.model) {
    const resized = tf.image.resizeBilinear(image, [145, 145]);

    const reshaped = resized.reshape([1, 145, 145, 3]);

    window.model
      .predict([reshaped])
      .array()

      .then((scores) => {
        scores = scores[0];
        let predicted = scores.indexOf(Math.max(...scores));
        //console.log(predicted);
        const classes = ["yawn", "no_yawn", "Closed", "Open"];
        const label = classes[predicted];
        console.log(label);
        document.getElementById("app").innerHTML = label;
      });
  } else {
    // The model takes a bit to load, if we are too fast, wait
    setTimeout(function () {
      predict(input);
    }, 50);
  }
};
async function app() {
  console.log("Successfully loaded model");

  const webcam = await tf.data.webcam(webcamElement);
  console.log(webcam);
  console.log(webcam);
  while (true) {
    const img = await webcam.capture();
    await predict(img);

    img.dispose();

    await tf.nextFrame();
  }
}
tf.loadLayersModel("model.json").then(function (model) {
  window.model = model;
});
app();
