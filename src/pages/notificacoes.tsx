import Layout from "../components/tamplate/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {
  const {alternarTema} = useAppData()

  return (
    <Layout titulo="Notificações"
    subtitulo="Grenciar notificações">
      <h1>Notificações</h1>
    </Layout>
  )
}
