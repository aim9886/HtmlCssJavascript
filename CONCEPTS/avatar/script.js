let avatarElement = document.getElementById('avatar');
let hairstyleSelect = document.getElementById('hairstyle');
let facialFeatureSelect = document.getElementById('facialFeature');
let accessorySelect = document.getElementById('accessory');

function changeHairstyle() {
  let selectedHairstyle = hairstyleSelect.value;
  avatarElement.style.backgroundImage = `url('hairstyles/${selectedHairstyle}.png')`;
}

function changeFacialFeature() {
  let selectedFacialFeature = facialFeatureSelect.value;
  avatarElement.style.backgroundImage = `url('facial-features/${selectedFacialFeature}.png')`;
}

function changeAccessory() {
  let selectedAccessory = accessorySelect.value;
  avatarElement.style.backgroundImage = `url('accessories/${selectedAccessory}.png')`;
}

function randomizeAvatar() {
  let randomHairstyle = getRandomOption(hairstyleSelect);
  let randomFacialFeature = getRandomOption(facialFeatureSelect);
  let randomAccessory = getRandomOption(accessorySelect);

  hairstyleSelect.value = randomHairstyle;
  facialFeatureSelect.value = randomFacialFeature;
  accessorySelect.value = randomAccessory;

  changeHairstyle();
  changeFacialFeature();
  changeAccessory();
}

function getRandomOption(selectElement) {
  let options = selectElement.options;
  let randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex].value;
}