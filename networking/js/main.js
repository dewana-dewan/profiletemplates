function loader(){
  document.getElementById('pre-loader').style.opacity = '0';
  setTimeout(document.getElementById('pre-loader').style.zIndex = '-1', 600 );
}

window.onload = loader;
