import { Header } from "../../components/Header"
import { Container, Column, Title, TitleHighLight} from  "./styles"
import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"

const Feed = () => {
    return (<>
        <Header />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighLight>#Ranking 5 Top da Semana</TitleHighLight>
                <UserInfo percentual={80} nome="Artur" image="https://avatars.githubusercontent.com/u/93260734?v=4&size=64"/>
                <UserInfo percentual={20} nome="Artur" image="https://avatars.githubusercontent.com/u/93260734?v=4&size=64"/>
                <UserInfo percentual={25} nome="Artur" image="https://avatars.githubusercontent.com/u/93260734?v=4&size=64"/>
                <UserInfo percentual={36} nome="Artur" image="https://avatars.githubusercontent.com/u/93260734?v=4&size=64"/>
                <UserInfo percentual={47} nome="Artur" image="https://avatars.githubusercontent.com/u/93260734?v=4&size=64"/>
            </Column>
            
        </Container>
    </>)
}

export {Feed}