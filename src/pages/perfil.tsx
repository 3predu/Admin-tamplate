import Layout from "../components/tamplate/Layout";
import useAppData from "../data/hook/useAppData";

export default function Perfil() {
  const {alternarTema} = useAppData()

  return (
    <Layout titulo="Perfil Usuário"
    subtitulo="Gerenciar Perfil">
      <h1>Perfil Usuário</h1>
    </Layout>
  )
}
