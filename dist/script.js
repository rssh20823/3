function updateTemperature(temp) {
  var mercury = document.getElementById("mercury");
  // 将输入的温度值限制在0到100之间
  temp = Math.max(0, Math.min(100, temp));
  // 将温度转换为在温度计中的高度（最大高度为温度计的高度）
  var height = temp / 100 * (document.querySelector('.thermometer').offsetHeight - mercury.offsetTop);
  mercury.style.height = height + "px";
}