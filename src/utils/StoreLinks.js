import AsyncStorage from "@react-native-async-storage/async-storage";
//Buscar os links salvos
export const getLinksSave = async (key) => {
    const myLinks = await AsyncStorage.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}
// Salvar um link
export const saveLink = async (key, newLink) => {
    let linksStored = await getLinksSave(key);

    const hasLink = linksStored.some(link => link.id === newLink.id);

    hasLink ? console.log('esse link ja existe na lista') : linksStored.push(newLink);

    const stringfy = JSON.stringify(linksStored);
    await AsyncStorage.setItem(key, stringfy);
    console.log('Link salvo com sucesso');

}

// Deletar algum link 
export const deleteLink = async (links,key) => {

}
