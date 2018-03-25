import { createStore } from 'redux';

const $form = document.getElementById('form')
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  // Prohibe que se haga lo que hace por defecto, en este cado recargar la pagina
  event.preventDefault();
  const data = new FormData($form)
  const title = data.get('title')
  console.log(title)
}

const initialState =[
    {
        "title": "Despacito",
    },
    {
        "title": "One more time",
    },
    {
        "title": "Echame la culpa",
    }
]

const store = createStore(
    (state) => state,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

