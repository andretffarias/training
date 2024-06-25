import posterImg from "../../assets/poster-star-wars.jpg"
import style from "./styles.module.css"

export default function Card() {
    return (
        <div className={style.container}>
            <img src={posterImg} alt="Img-poster-star-wars" />
            <div className={style.content}>
                <h2>Pôster: Star Wars (1977)</h2>
                <p>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma Ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
                <button className={style.btnCard}>Comprar agora</button>
            </div>

        </div>
    )
}