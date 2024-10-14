// For example:
// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

public class Bio {
    public String dnaToRna(String dna) {
        return dna.replaceAll("T", "U");
    } 
}
