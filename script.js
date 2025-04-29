const colorInput = document.getElementById('color');
const colorPreview = document.getElementById('color-preview');

colorInput.addEventListener('input', function () {
  colorPreview.style.backgroundColor = colorInput.value;
});
