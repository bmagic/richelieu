const fs = require('fs')
const util = require('util')
const pattern = {'7f':'fb','f4':"12",'16':'54','a4':'57','b5':'cd'}
const primes = []
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
let count = 0;

start().catch((e)=>{console.error(e)})


async function start () {
  const content = await readFile('prime.txt','utf-8');
  myFunc(content,pattern)
  
  
}

function  myFunc(content,pattern){
  
  for(let index in Object.keys(pattern)){
  
    //console.log(`Checking ${content} with pattern ${JSON.stringify(pattern)}`)
  
    const key = Object.keys(pattern)[index]
    const value = pattern[key]
    
    const array = content.split(value)
    
    const matriceCount  = parseInt(Math.pow(10,array.length-1), 2).toString(10);
    
    
    for(let i=0; i < matriceCount;i++){
      const arrayTmp = array.slice()
      
      
      let mask =  parseInt(i, 10).toString(2).toString();
      
 
      mask = ('00000000'+mask).slice(-(array.length-1));

    
      //console.log(`i: ${i}`)
      for(let j=0; j< mask.length;j++){
        if(mask[j] == 1)
          arrayTmp.splice((j*2)+1,0,value)
        else
          arrayTmp.splice((j*2)+1,0,key)
        
      }
      
      let contentTmp = arrayTmp.join('')
      let contentTmpClean = contentTmp.replace(/:/g,'').toUpperCase()
      
      if(contentTmp.includes('::')){
        console.log(key)
        console.log(value)
        console.log(mask)
        console.log(matriceCount)
        console.log(pattern)
        console.log(arrayTmp)
        console.log(contentTmp)
        return
      }
      if(!primes.includes(contentTmpClean))
      {
        primes.push(contentTmpClean)
        count ++
        console.log(count)
        if(count===2048)
          writeFile(`results/primes.txt`,JSON.stringify(primes))
      }
  
      const patternTmp = JSON.parse(JSON.stringify(pattern))
  
      delete patternTmp[key]
      myFunc(contentTmp,patternTmp)
  
  
    }

    
    
  }
  
  
}

