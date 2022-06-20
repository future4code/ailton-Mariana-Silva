import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`
const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`
const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`
const TarefasContainer = styled.div`
  display: flex;
  margin: 10px;

  button {
    color: white;
    background-color: gray;
    margin-left: 10px;
  }
`
class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: 'Texto da tarefa',
          completa: false
        },
        {
          id: Date.now(),
          texto: 'Texto da segunda tarefa',
          completa: true
        }
      ],
      inputValue: '',
      filtro: ''
    }
  componentDidUpdate() {
    localStorage.setItem('User', JSON.stringify(this.state.tarefas))
  };
  componentDidMount() {
   const userStorage = localStorage.getItem('User')
   const userParse = JSON.parse(userStorage)
   this.setState({tarefas:userParse || []})
  };
  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }
  criaTarefa = () => {
    const novoItem = {
      id: Date.now(), 
      texto: this.state.inputValue,
      completa: false
    }
    const novaLista = [novoItem, ...this.state.tarefas]
    this.setState({tarefas: novaLista})
  }
  selectTarefa = (id) => {
    const novaLista = this.state.tarefas.map((post) =>{
      if(id === post.id){
       const novoPost = {
         ... post,
         completa: !post.completa
       }
       return novoPost
      } else {
        return post
      }
    })
    this.setState({ tarefas: novaLista})
  }
  apagarTarefa = (id) => {
    const novaLista = this.state.tarefas.filter((tarefa) => {
      return id !== tarefa.id
    })
    this.setState({ tarefas: novaLista })
  }
  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value})
  }
  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })
    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>
        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
        {listaFiltrada.map((tarefa, index) => {
            return (
              <TarefasContainer key={index}>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}>
                  {tarefa.texto}
                </Tarefa>
                <button onClick={() => this.apagarTarefa(tarefa.id)}>x</button>
              </TarefasContainer>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}
export default App