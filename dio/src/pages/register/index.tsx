import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Column, Container, Title, Wrapper, SubtitleLogin, Row, JaTenhoConta, JaTenhoContaLink } from "./styles";
import { Input } from "../../components/Input";

const Register = () => {
  const { control } = useForm();

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas desejadas
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <Title>Comece agora grátis</Title>
          

          <SubtitleLogin>
            Crie a sua conta e make the change._
          </SubtitleLogin>

          <Input
            name="Nome Completo"
            control={control}
            placeholder="Nome Completo"
          />
          <Input
            name="E-mail"
            control={control}
            placeholder="E-mail"
          />
          <Input
            name="password"
            control={control}
            placeholder="Senha"
            type="password"
          />
          <Button title="Criar minha conta" variant="secondary" type="submit" />
          <SubtitleLogin>
            Ao clicar em "criar minha conta gratis", declaro que aceito as Politicas de Privacidade e os Termos de Uso da Dio.
          </SubtitleLogin>
          <Row>
            <JaTenhoConta>
                Já tenho conta.
            </JaTenhoConta>
            <JaTenhoContaLink href="/login">
                Fazer Login
            </JaTenhoContaLink>
          </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Register };