var featureList = [
  "Real Time Alerts",
  "Biz-Ops Monitoring",
  "Actionable Insights",
]
var count = 0

function prodFeatureLoop() {
  var prodFeature = featureList[count]
  document.getElementById("product-hero-feature").innerHTML = featureList[count]

  count++
  if (count === featureList.length) {
    count = 0
  }
}

setInterval(prodFeatureLoop, 3000)
