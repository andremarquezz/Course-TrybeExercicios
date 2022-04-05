import { Component } from "react";
const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteúdo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteúdo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component{
  // Que eu fiz
  // render() {
  //   return <div>
  //     <p>{conteudos.map((element) =>
  //       `O conteudo é: ${element.conteudo}
  //       Status: ${element.status}
  //       Bloco: ${element.bloco}
  //       `)}
  //     </p>
  //   </div>
  // }
  // Gabarito
     render() {
          return(
            <div className="content">
              {conteudos.map((elem) => (
                <div key={elem.conteudo} className="card">
                  <h4>{`O conteudo é: ${elem.conteudo}`}</h4>
                  <p>{`status: ${elem.status}`}</p>
                  <p>{`bloco: ${elem.bloco}`}</p>
                </div>
              ))}
            </div>
          );
        }
}

export default Content