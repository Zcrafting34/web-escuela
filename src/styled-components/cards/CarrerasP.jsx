import Card from "./Card";



function CarrerasP({encabezado, tc1,desc1, tc2, desc2, desc3, tc3, gradient}) {
  return (
    <section className= {gradient ? "carreras bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... py-10 pt-32" : "py-10" }>
      <h3 className={gradient ? 'class="mt-20 ml-10 text-4xl font-extrabold leading-none tracking-tight text-white md:text-3xl md:mt-0 lg:text-6xl dark:text-dark'
        : 'class="mt-10 ml-10 text-4xl font-extrabold leading-none tracking-tight text-dark md:text-3xl md:mt-0 lg:text-6xl dark:text-dark"'}>
        {encabezado}
      </h3>
      <div className="grid grid-cols-3 mt-5">
        <Card className="card" title={tc1} description={desc1} imagen={null} ruta={"/carreras"}/>
        <Card title={tc2} description={desc2} imagen={null}/>
        <Card title={tc3} description={desc3} imagen={null}/>
      </div>
    </section>
    
  );
}

export default CarrerasP;
