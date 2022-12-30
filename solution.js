function marsExploration(s) {
    
    let count = 0
    for(let i = 0; i < s.length-1; i=(i+3)){
        
        let word = s.substr(i, 3)
        if(word[0] !== "S"){
            count +=1
        }
        if(word[1] !== "O"){
            count +=1
        }
        if(word[2] !== "S"){
            count +=1
        }
    }
    return count
    
}
