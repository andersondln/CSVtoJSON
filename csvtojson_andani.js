function CSVtoJSON(csv, filter){

    let final = [];
    let headerPosition = [];
    let content = csv.split('\n');
    let headerLines = content[0].split(',');
    let errorStyle = 'color: white; background-color:blue; font-weight: bold; font-size:15px;';
    if(filter != null && filter != '' && Array.isArray(filter)){
     headerLines.forEach((me, meindex)=>{
         if(filter.includes(me))
         headerPosition.push(me+':'+meindex);
     });
     if(headerPosition.length == 0)
     console.log('%c [CSVtoJSON]\nBy Anderson Daniel \n'
     +' ::: Filtro não encontrado. :::', errorStyle);
     else if(headerPosition.length < filter.length)
     console.log('%c [CSVtoJSON] \n by Anderson Daniel'
     +'\n ::: Um ou mais filtros não foram encontrados. :::',errorStyle);
    }

    content.forEach((me, meindex)=>{
        let lines = me.split(',');
        let obj = {}
        if(meindex > 0){
             if(headerPosition.length > 0){
                     headerPosition.forEach(e=>{
                     let esplit = e.split(':');
                     obj[esplit[0]] = lines[esplit[1]];
              
                 });
                 final.push(obj);
             }else{
                headerLines.forEach((e, eindex)=>{
                   obj[e] = lines[eindex];
                });
                final.push(obj);
             }
        }
    });
    
    let jsonString = JSON.stringify(final);
    if(isObj)
    return JSON.parse(jsonString);
    else
    return jsonString;

 }
