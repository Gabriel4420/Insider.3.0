import AsyncStorage from "@react-native-async-storage/async-storage";


export async function getLinksSave(key){

    const mylinks = await AsyncStorage.getItem(key);

    let linksSaves = JSON.parse(mylinks) || [];

    return linksSaves;
}

export async function saveLink (key,newLink){
    let linksStored = await getLinksSave(key);

    const hasLink = linksStored.some(link => link.id === newLink.id);
   
    // se tiver algum link salvo com o msm id ==> ignored
    if(hasLink){
        console.log('esse link ja existe na lista !!');
        return;
    }
    linksStored.push(newLink);

    await AsyncStorage.setItem(key, JSON.stringify(linksStored))
    console.log('link salvo na lista:'+linksStored)

    
}

export async function deleteLink(links, id){
    
    let link = await getLinksSave(id);

    let myLinks = links.filter((item)=>{
        
        return(item.id !== id)
    })
    link.pop(links);

    await AsyncStorage.setItem('sujeitoLinks',JSON.stringify(myLinks));
    return myLinks;
}