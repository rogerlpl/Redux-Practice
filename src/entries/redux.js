const $form = document.getElementById('form')
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  // Prohibe que se haga lo que hace por defecto, en este cado recargar la pagina
  event.preventDefault();
  const data = new FormData($form)
  const title = data.get('title')
  console.log(title)
}