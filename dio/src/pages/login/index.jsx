import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

const schema = yup
  .object({
    email: yup.string().email("Email nao é valido").required("Campo Obrigatorio"),
    password: yup.string().min(3, "No minimo 3 caracteres").required("Campo Obrigatorio"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get("/users", {
        params: {
          email: formData.email.trim(),
        },
      });

      const user = data.find(
        (item) => item.senha === formData.password.trim()
      );

      console.log("Retorno api", data);
      console.log("Usuário encontrado:", user);

      if (user) {
        navigate("/feed");
      } else {
        alert("Email ou senha inválidos");
      }
    } catch (error) {
      console.log(error);
      alert("Houve um erro, tente novamente.");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para voce aprender com experts, dominar as principais tecnologias
            e entrar mais rapido nas empresas mais desejadas.
          </Title>
        </Column>

        <Column>
          <Wrapper>
            <TitleLogin>Faça seu Cadastro</TitleLogin>
            <SubtitleLogin>Faça o seu login e make the cange._</SubtitleLogin>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
              />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>

            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };