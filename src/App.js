import React, {useState} from 'react'

export default function App(){

  const[valorTela, setValorTela] = useState('')
  const[resultado, setResultado] = useState(0)
  const[acumulador, setAcumualdor] = useState(0)
  const[operado, setOperado] = useState(false)
  
  // cria a tela da calculadora
  const Tela=(valor, result)=>{
    return(
      <div style={cssTela}>
        <span style={cssTelaOper}>{valor}</span>
        <span style={cssTelaResult}>{result}</span>
      </div>
    )
  }

  // Botoes
  const Btn=(label, onClick)=>{
    return(
      <button style={cssButton} onClick={onClick}>{label}</button>
    )
  }
  
  // FUNÇÕES
  const addDigitoTela=(d)=>{
    if((d=='+' || d== '-' || d=='*' || d== '/') && operado ){
      console.log("+-*/")
      setOperado(false)
      setValorTela(resultado+d)
      return 
    }
    if(operado){
      setValorTela(d)
      setOperado(false)
      return
    }
    const valorDigitaTela=valorTela+d
    setValorTela(valorDigitaTela)
  }

  const limparMemoria=()=>{
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumualdor(0)
    return
  }

  const Operacao=(oper)=>{
    if(oper=='bs'){
      let vtela=valorTela
      vtela=vtela.substring(0, (vtela.length-1))
      setValorTela(vtela)
      setOperado(false)
      return
    }
    try{
      const r=eval(valorTela) // calculo
      setAcumualdor(r)
      setResultado(r)
      setOperado(true)

    }catch{
      setResultado('ERRO')
    }
  }

  // ESTILOS
  const cssContainer={
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection: 'column',
    width:300,
    border:'1px solid #000',
  }

  const cssBotoes={
    flexDirection:'row',
    flexWrap:'wrap'
  }

  const cssTela={
    display:'flex',
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
    alignItems:'flex-start',
    backgroudColor: '#444',
    flexDirection:'column', 
    width: 260
  }

  // display de opereção
  const cssTelaOper={
    fontSize:25,
    backgroudColor:'#fff',
    height:20
  }

  // display do resultado
  const cssTelaResult={
    fontSize:50,
    color:'#000'
  }

  const cssButton={
    fontSize:30,
    height: 75,
    width:75,
    padding:20,
    backgroudColor:'#000',
    color:'#000',
    borderColor: '#fff',
    textAlign:'center',
    outline:'none'
  }

  return(
    <>
      <div style={cssContainer}>
        <h3>Calculadora Matemática simples</h3>
        {Tela(valorTela, resultado)}
        <div style={cssBotoes}>
          {Btn('AC', limparMemoria)}
          {Btn('(', ()=>addDigitoTela('('))}
          {Btn(')', ()=>addDigitoTela(')'))}
          {Btn('/', ()=>addDigitoTela('/'))}<br/>
          {Btn('7', ()=>addDigitoTela('7'))}
          {Btn('8', ()=>addDigitoTela('8'))}
          {Btn('9', ()=>addDigitoTela('9'))}
          {Btn('*', ()=>addDigitoTela('*'))}<br/>
          {Btn('4', ()=>addDigitoTela('6'))}
          {Btn('5', ()=>addDigitoTela('5'))}
          {Btn('6', ()=>addDigitoTela('6'))}
          {Btn('-', ()=>addDigitoTela('-'))}<br/>
          {Btn('1', ()=>addDigitoTela('1'))}
          {Btn('2', ()=>addDigitoTela('2'))}
          {Btn('3', ()=>addDigitoTela('3'))}
          {Btn('+', ()=>addDigitoTela('+'))}<br/>
          {Btn('0', ()=>addDigitoTela('0'))}
          {Btn('.', ()=>addDigitoTela('.'))}
          {Btn('<-', ()=>Operacao('bs'))}
          {Btn('=', ()=>Operacao('='))}
        </div>
      </div>
    </>
  )
}