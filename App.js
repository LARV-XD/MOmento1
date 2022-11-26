import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';


export default function App() {
  
  const [identificacion, setidentificacion] = useState('')
  const [nombres, setnombres] = useState('')
  const [asignatura, setasignatura] = useState('')
  const [nota1, setnota1] = useState(0)
  const [nota2, setnota2] = useState(0)
  const [nota3, setnota3] = useState(0)
  const [definitiva, setdefinitiva] = useState(0)
  const [observacion, setobservacion] = useState('')
  const [arrguadar, setguadar] = useState([])


  const guardar = () =>{
    let result = 0
    let observ = ''
    if(identificacion !== ''){
      if(nombres !== ''){
        if(asignatura !== ''){
          if(nota1 >= 0 && nota1<=5 && nota2 >= 0 && nota2<=5 && nota3 >= 0 && nota3<=5){
            result=(parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3
            
            if(result >= 3){
              observ = 'Aprobo'
            }else if(result > 2 && result <= 2.94){
              observ = 'Habilita'
            }else{
              observ = 'Reprueba'
            }
          }else{
            alert('Digite correctamente las notas')
          }
        }else{
          alert('la asignatura es obligatoria')
        }
      }else{
        alert('El nombre es obligatorio')
      }
    }else{
      alert('La identificacion es requerida')
    }

    setguadar(arrguadar => [...arrguadar,{
      identificacion,
      nombres,
      asignatura,
      nota1,
      nota2,
      nota3,
      definitiva:result,
      observacion:observ
    }])
    setdefinitiva(result)
    setobservacion(observ)
    
  }



  const limpiar = () =>{
    setidentificacion('')
    setnombres('')
    setasignatura('')
    setnota1(0)
    setnota2(0)
    setnota3(0)
    setdefinitiva(0)
    setobservacion('')
  }

  const buscar = (id) =>{
    let search = arrguadar.find(estud => estud.identificacion == identificacion)
    if(search !== undefined){
      setidentificacion(search.identificacion)
      setnombres(search.nombres)
      setasignatura(search.asignatura)
      setnota1(search.nota1)
      setnota2(search.nota2)
      setnota3(search.nota3)
      setdefinitiva(search.definitiva)
      setidentificacion(search.identificacion)
      setobservacion(search.observacion)
    }
  }



  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Text>Asignacion de notas CESDE</Text>
      </View>
      <View>
        <View style={styles.body}>
          <Text>Identificacion</Text>
          <TextInput
            onChange={(e)=>setidentificacion(e.target.value)}
            value={identificacion}
            style={styles.buttons}
          />
        </View>
        <View style={styles.body}>
          <Text>Nombres</Text>
          <TextInput
            onChange={(e)=>setnombres(e.target.value)}
            style={styles.buttons}
            value={nombres}
          />
        </View>
        <View style={styles.body}>
          <Text>Asignatura</Text>
          <TextInput
            onChange={(e)=>setasignatura(e.target.value)}
            style={styles.buttons}
            value={asignatura}
          />
        </View>
        <View style={styles.body}>
          <Text>Nota 1</Text>
          <TextInput
            onChange={(e)=>setnota1(e.target.value)}
            value={nota1}
            style={styles.buttons}
          />
        </View>
        <View style={styles.body}>
          <Text>Nota 2</Text>
          <TextInput
            onChange={(e)=>setnota2(e.target.value)}
            value={nota2}
            style={styles.buttons}
          />
        </View>
        <View style={styles.body}>
          <Text>Nota 3</Text>
          <TextInput
            onChange={(e)=>setnota3(e.target.value)}
            value={nota3}
            style={styles.buttons}
          />
        </View>
        <View style={styles.body}>
          <Text>Definitiva</Text>
          <TextInput
            disabled
            value={definitiva}
            style={styles.buttons}
          />
        </View>
        <View style={styles.body}>
          <Text>Observacion</Text>
          <TextInput
            onChange={(e)=>setobservacion(e.target.value)}
            value={observacion}
            style={styles.buttons}
          />
        </View>
      </View>
      <View style={styles.options}>
        <Button
        style={styles.optionsbuttons}
        title={'Guardar/Calcular'}
        color='#ff4500'
        onPress={()=>{guardar()}}
        />
        <Button
        style={styles.optionsbuttons}
        title={'Limpiar'}
        color='#ff4500'
        onPress={()=>{limpiar()}}
        />
        <Button
        style={styles.optionsbuttons}
        title={'Buscar'}
        color='#ff4500'
        onPress={()=>{buscar(identificacion)}}
        />
    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98fb98',
    alignItems: 'center',
    marginTop:50,
  },


  header:{
    backgroundColor:'#00ffff',
    width:'120%',
    flex:3,
    alignItems:'center',
    
    
  },
  body:{
    width:'100%',
    display:'flex',
    flex:2,
    flexDirection:'row',
    marginTop:'20px',
    alignItems:'space-around',
    justifyContent:'space-between',
    fontSize: 30,
  },
  buttons:{
    borderBottomWidth:'3px',
    marginLeft:'30px',
    color: '#ff0000',
    fontSize: 20,
    
  },
  options:{
    display:'flex',
    flexDirection:'column',
    width:'100%',
    margin:'1rem'
    
  
  },
  optionsbuttons:{
    color:'##7fff00',
    width:'20px',
    marginLeft:'2rem',
    color:'#7fff00',
    fontSize: 30,
  }


});