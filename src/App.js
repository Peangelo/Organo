import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Flamengo',
      cor: '#C52613'
    },
    {
      id: uuidv4(),
      nome: 'Botafogo',
      cor: '#000000'
    },
    {
      id: uuidv4(),
      nome: 'Palmeiras',
      cor: '#006437'
    },
    {
      id: uuidv4(),
      nome: 'São Paulo',
      cor: '#FE0000'
    },
    {
      id: uuidv4(),
      nome: 'Corinthians',
      cor: '#000000'
    },
    {
      id: uuidv4(),
      nome: 'Bahia',
      cor: '#006CB5'
    },
    {
      id: uuidv4(),
      nome: 'Cruzeiro',
      cor: '#2F529E'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Gabriel Barbosa Almeida',
      cargo: 'Gabigol',
      imagem: 'https://img.olympics.com/images/image/private/t_1-1_300/f_auto/primary/dg8w1a8tdciano5dmrrq',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Giorgian De Arrascaeta',
      cargo: 'Arrascaeta',
      imagem: 'https://conteudo.imguol.com.br/c/esporte/30/2022/08/02/arrascaeta-comemora-gol-do-flamengo-sobre-o-corinthians-pela-libertadores-1659489351819_v2_1x1.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Francisco das Chagas',
      cargo: 'Tiquinho',
      imagem: 'https://conteudo.imguol.com.br/c/esporte/25/2023/07/30/tiquinho-soares-comemora-gol-marcado-pelo-botafogo-sobre-o-coritiba-em-confronto-do-campeonato-brasileiro-1690749540067_v2_3x4.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Jefferson Savarino',
      cargo: 'Savarino',
      imagem: 'https://odia.ig.com.br/_midias/jpg/2024/03/02/385x420/1_53558942668_1fd49a4f03_k-32172284.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Ronielson da Silva Barbosa',
      cargo: 'Rony',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2zkkNX7bpCNGrO4NzF2cc-LR-8H9r3DUlQ&s',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Eduardo Pereira Rodrigues',
      cargo: 'Dudu',
      imagem: 'https://conteudo.imguol.com.br/c/esporte/bd/2023/07/08/dudu-do-palmeiras-comemora-seu-gol-sobre-o-flamengo-pelo-brasileirao-1688865394645_v2_3x4.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Endrick Felipe Moreira de Sousa',
      cargo: 'Endrick',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Endrick-Palmeiras-Liverpool-abr24.jpg/1200px-Endrick-Palmeiras-Liverpool-abr24.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Jonathan Calleri Oliveira da Silva',
      cargo: 'Calleri',
      imagem: 'https://pbs.twimg.com/media/GFIYjVtW4AEsbxF.jpg:large',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lucas Rodrigues Moura da Silva',
      cargo: 'Lucas Moura',
      imagem: 'https://portalcbncampinas.com.br/wp-content/uploads/2023/08/portalcbncampinas.com.br-aniversariante-lucas-moura-celebra-gol-no-maracana-com-a-camisa-do-sao-paulo-lucas-moura-gol-sao-paulo-1408.jpg',
      time: times[3].nome
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor
      }
      return time;
    }));
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }


  return (
    <div>
      <Banner />
      <Formulario aoCriarTime={cadastrarTime} times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Times</h1>
        {times.map((time, indice) => <Time mudarCor={mudarCor} key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} aoFavoritar={resolverFavorito} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
