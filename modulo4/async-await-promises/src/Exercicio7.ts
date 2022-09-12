const oi = () => {
    console.log(`Oi!`)
}

const message = async():Promise<any> => {
    console.log("Após 5 segundos:")
    return new Promise (() => {
        setTimeout(oi, 5000);
    })
}
message();