import datas from '../../assets/datas.json';

function Banner() {
  return (      
      <section id="banner">
        <div className='welcome-message card'>
          <p>Bienvenue cher visiteur !</p>
          <p>Je vous informe que vous vous trouvez actuellement sur mon ancien portfolio (2024).</p>
          <p>Pour me contacter ou découvrir mon activité actuelle, rendez-vous sur le site de mon entreprise : <br />
          <a href="https://koji-dev.fr/">koji-dev.fr</a></p>
        </div>
        <div className="banner-content">
        <div className="image">
          <div className="img-maelle"></div>
        </div>

        <div>
          <h1>Maëlle Nioche</h1>
          <strong>{datas.job}</strong>
        </div>
        </div>
      </section>
  );
}

export default Banner;
