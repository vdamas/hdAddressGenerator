const Generator = require('./generator')

let gen = Generator.withMnemonic("brand improve symbol strike say focus ginger imitate ginger appear wheel brand swear relief zero",false,"BTC",false,49,0,0,"test")
//let gen = Generator.withMnemonicBIP32("brand improve symbol strike say focus ginger imitate ginger appear wheel brand swear relief zero",false,"m/44'/0'/0'",false)
//let gen = Generator.withMnemonicBIP141("brand improve symbol strike say focus ginger imitate ginger appear wheel brand swear relief zero",false,"m/0'/0","p2wpkh")
gen.generate(3,0)