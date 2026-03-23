import { Link } from "react-router-dom"
import { Button } from "../../components/Button"
import BannerImg from "../../assets/Banner.png"
import { Header } from "../../components/Header"
import { Container, TextContent, Title, TitleHighLight} from  "./styles"

const Home = () => {
    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighLight>
                        Implemente 
                        <br/>
                    </TitleHighLight>
                    O seu futuro global agora!
                </Title>
                <TextContent>
                    Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e necare seu novo
                    desafio profissional, evoluindo em comunidade com os melhores experts.
                </TextContent>
                <Button title="Comecar agora" variant="secondary" onClick={() => null}/>
            </div>
            <div>
                <img src={BannerImg} alt="imagem Principal" />
            </div>
        </Container>
    </>)
}

export {Home}