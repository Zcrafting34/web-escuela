function Card({ title, description, imagen, ruta, button, href }) {
  
    return (
      <div id="Card" class="Card mx-10 my-5 max-w-sm border rounded-xl shadow dark:bg-gray-800 hover:scale-110 transition-all ease-in-out ">
        <div>
          <img class="rounded-t-lg" src={imagen} alt="" />
        </div>
        <div class="p-5">
          <>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          {button ? (
            <a
            href={href}>
            <button
              dat
              a-modal-target="default-modal"
              data-modal-toggle="default-modal"
              class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              
            >
              Saber mas
            </button>
            </a>
          ) : (
            <></>
          
          )}
  
          {/*modal*/}
        </div>
      </div>
    );
  }
  
  export default Card;
  