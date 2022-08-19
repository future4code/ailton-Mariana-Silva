function converteDnaEmRna(dna) {
    let rna = "";
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "A") {
            rna += "U";
        }
        else if (dna[i] === "T") {
            rna += "A";
        }
        else if (dna[i] === "G") {
            rna += "C";
        }
        else if (dna[i] === "C") {
            rna += "G";
        }
    }
    return rna;
}
console.log(converteDnaEmRna("ATTGCTGCGCATTAACGACGCGTA"));
//# sourceMappingURL=exercicio7.js.map