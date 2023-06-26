import { StyleSheet, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import Button from './src/components/Button';
import Display from './src/components/Display';

export default function App() {
  const [ value, setValue] = useState('')
  const [ displayValue, setDisplayValue] = useState("0")
  const [ showResult, setShowResult] = useState(false)

  const addDigit = n =>{
    if(showResult === true){
      setShowResult(false)
      setDisplayValue(n)
    } else{
      if(displayValue === "0"){
      return setDisplayValue("" + `${n}`)
      }
      if(n === '.' && displayValue.includes('.')){
        return
      }
      setDisplayValue(`${displayValue}${n}`)
    }
  }
  const clearMemory = () =>{
    setDisplayValue('0')
    setValue('')
  }
  const addOperation = operation =>{
    setValue(`${value} ${displayValue} ${operation}`)
    setDisplayValue("0")
  }

  const resultOperation = () =>{
    if(displayValue !== '0'){
      setDisplayValue(eval(`${value} ${displayValue}`))
      setValue('')
    }else{
      setDisplayValue(eval(value.slice(0,-1)))
      setValue('')
    }
    return setShowResult(true)
  }

  const eraseNumber = () =>{
    if(showResult === true){
      clearMemory()
      setShowResult(false)
    }else{
      if(displayValue.length === 1){
        return setDisplayValue('0')
      }
      setDisplayValue(displayValue.slice(0,-1))
    }
  }


  return (
    <View style={styles.container}>
      <Display value1={value} value={displayValue}></Display>
      <View style={styles.buttons}>
        <Button label={'CE'} duble onClick={clearMemory}></Button>
        <Button label={'<='} erase onClick={()=>eraseNumber()}></Button>
        <Button label={'7'} onClick={()=> addDigit(7)}></Button>
        <Button label={'8'} onClick={()=> addDigit(8)}></Button>
        <Button label={'9'} onClick={()=> addDigit(9)}></Button>
        <Button label={'x'} operation onClick={()=>addOperation('*')}></Button>
        <Button label={'4'} onClick={()=> addDigit(4)}></Button>
        <Button label={'5'} onClick={()=> addDigit(5)}></Button>
        <Button label={'6'} onClick={()=> addDigit(6)}></Button>
        <Button label={'-'} operation onClick={()=>addOperation('-')}></Button>
        <Button label={'1'} onClick={()=> addDigit(1)}></Button>
        <Button label={'2'} onClick={()=> addDigit(2)}></Button>
        <Button label={'3'} onClick={()=> addDigit(3)}></Button>
        <Button label={'+'} operation onClick={()=>addOperation('+')}></Button>
        <Button label={'='} result onClick={()=>resultOperation()}></Button>
        <Button label={'0'} onClick={()=> addDigit(0)}></Button>
        <Button label={'.'} onClick={()=> addDigit(".")}></Button>
        <Button label={'/'} operation onClick={()=>addOperation('/')}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  }
});
