import { View, Text, TouchableOpacity, TextInput,Image,Keyboard } from 'react-native'
import React, { useState } from 'react'

const Mainscreen= () => {

    const[exp,setExp]=useState("");
    
    const[st,setSt]=useState("");

    const handlebrac=()=>{
        if(st==""){
            setExp(exp+"(");
            setSt("(");
        }
        else if(st=="("){
            setSt(")");
            setExp(exp+")");
            
        }
        else if(st==")"){
            setSt("(");
            setExp(exp+"(");
        }
    }
    const handledec=()=>{
        
        let ans=Math.round(Number(eval(exp))*100)/100;
        let val=ans.toString();
        setExp(val);
    }
  return (
    <View style={{backgroundColor:'white',height:'100%'}}>
      <View style={{height:280,backgroundColor:'white'}}>
        <TextInput style={{height:250,textAlign:'right',color:'black',padding:20,fontSize:35}} value={exp} editable={false}/>

      </View>
      <View style={{margin:20,marginTop:10,backgroundColor:'white'}}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
        <TouchableOpacity onPress={()=>setExp("")}>
            <Text style={{borderRadius:50,color:'white',height:70,width:80,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#E96479'}}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlebrac}>
            <Text style={{borderRadius:50,color:'black',width:80,height:70,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#FFBABA'}}>( )</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            let v=Number(eval(exp+"*0.01")).toString();
            setExp(v);
        }}>
            <Text style={{borderRadius:50,color:'black',width:80,height:70,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#FFBABA'}}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setExp(exp+"/")}>
            <Text style={{borderRadius:50,color:'black',width:80,height:70,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#FFBABA'}}>÷</Text>
        </TouchableOpacity>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
        <TouchableOpacity onPress={()=>setExp(exp+"7")}>
            <Text style={{borderRadius:20,color:'black',height:70,width:80,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#DDDDDD'}}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setExp(exp+"8")}>
            <Text style={{borderRadius:20,color:'black',width:80,height:70,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#DDDDDD'}}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setExp(exp+"9")}>
            <Text style={{borderRadius:20,color:'black',width:80,height:70,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#DDDDDD'}}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setExp(exp+"*")}>
            <Text style={{borderRadius:50,color:'black',width:80,height:70,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#FFBABA'}}>x</Text>
        </TouchableOpacity>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
        <TouchableOpacity onPress={()=>setExp(exp+"4")}>
            <Text style={{borderRadius:20,color:'black',height:70,width:80,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#DDDDDD'}}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setExp(exp+"5")}>
            <Text style={{borderRadius:20,color:'black',width:80,height:70,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#DDDDDD'}}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setExp(exp+"6")}>
            <Text style={{borderRadius:20,color:'black',width:80,height:70,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#DDDDDD'}}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setExp(exp+"-")}>
            <Text style={{borderRadius:50,color:'black',width:80,height:70,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#FFBABA'}}>-</Text>
        </TouchableOpacity>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
        <TouchableOpacity onPress={()=>setExp(exp+"1")}>
            <Text style={{borderRadius:20,color:'black',height:70,width:80,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#DDDDDD'}}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setExp(exp+"2")}>
            <Text style={{borderRadius:20,color:'black',width:80,height:70,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#DDDDDD'}}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setExp(exp+"3")}>
            <Text style={{borderRadius:20,color:'black',width:80,height:70,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#DDDDDD'}}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setExp(exp+"+")}>
            <Text style={{borderRadius:50,color:'black',width:80,height:70,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#FFBABA'}}>+</Text>
        </TouchableOpacity>
        </View>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
        <TouchableOpacity onPress={()=>setExp(exp.slice(0,exp.length-1))}>
            <Image source={{uri:"https://cdn4.vectorstock.com/i/1000x1000/47/73/arrow-left-on-black-background-vector-22564773.jpg"}} style={{width:80,height:80,borderRadius:50}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setExp(exp+"0")}>
            <Text style={{borderRadius:20,color:'black',width:80,height:70,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#DDDDDD'}}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setExp(exp+".")} >
            <Text style={{borderRadius:20,color:'black',width:80,height:70,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#DDDDDD'}}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handledec}>
            <Text style={{borderRadius:50,color:'black',width:80,height:70,padding:5,textAlign:'center',fontSize:35,borderWidth:2,borderColor:'black',backgroundColor:'#91D18B'}}>=</Text>
        </TouchableOpacity>
        </View>
        
      </View>
    </View>
  )
}

export default Mainscreen;