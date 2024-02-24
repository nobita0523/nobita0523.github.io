function Load() {
  if (localStorage.getItem('pass')) {} else {
    Password();
  }
}
function Password() {
  var pass_input = window.prompt('パスワードを入力(答え:gorilla)');
  if (pass_input == 'gorilla') {
    localStorage.setItem('pass', true);
  } else {
    Password();
  }
}
