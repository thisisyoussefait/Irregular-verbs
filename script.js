var irregularVerbs = [
    { baseForm: "go", pastTense: "went", pastParticiple: "gone" },
    { baseForm: "eat", pastTense: "ate", pastParticiple: "eaten" },
    { baseForm: "drink", pastTense: "drank", pastParticiple: "drunk" },
    { baseForm: "be", pastTense: "was", pastParticiple: "been" },
    { baseForm: "begin", pastTense: "began", pastParticiple: "begun" },
    { baseForm: "Break", pastTense: "broke", pastParticiple: "broken" },
    { baseForm: "bring", pastTense: "brought", pastParticiple: "brought" },
    { baseForm: "buy", pastTense: "bought", pastParticiple: "bought" },
    { baseForm: "build", pastTense: "built", pastParticiple: "built" },
    { baseForm: "choose", pastTense: "chose", pastParticiple: "chosen" },
    { baseForm: "come", pastTense: "came", pastParticiple: "come" },
    { baseForm: "cost", pastTense: "cost", pastParticiple: "cost" },
    { baseForm: "cut", pastTense: "cut", pastParticiple: "cut" },
    { baseForm: "do", pastTense: "did", pastParticiple: "done" },
    { baseForm: "draw", pastTense: "drew", pastParticiple: "drawn" },
    { baseForm: "drive", pastTense: "drove", pastParticiple: "driven" },
    { baseForm: "feel", pastTense: "felt", pastParticiple: "felt" },
    { baseForm: "find", pastTense: "found", pastParticiple: "found" },
    { baseForm: "get", pastTense: "got", pastParticiple: "got" },
    { baseForm: "give", pastTense: "gave", pastParticiple: "given" },
    { baseForm: "have", pastTense: "had", pastParticiple: "had" },
    { baseForm: "hear", pastTense: "heard", pastParticiple: "eard" },
    { baseForm: "hold", pastTense: "held", pastParticiple: "held" },
    { baseForm: "keep", pastTense: "kept", pastParticiple: "kept" },
    { baseForm: "know", pastTense: "knew", pastParticiple: "know" },
    { baseForm: "leave", pastTense: "left", pastParticiple: "left" },
    { baseForm: "lead", pastTense: "led", pastParticiple: "let" },
    { baseForm: "lie", pastTense: "lay", pastParticiple: "loan" },
    { baseForm: "lose", pastTense: "lost", pastParticiple: "lost" },
    { baseForm: "make", pastTense: "made", pastParticiple: "made" },
    { baseForm: "mean", pastTense: "meant", pastParticiple: "meant" },
    { baseForm: "meet", pastTense: "met", pastParticiple: "met" },
    { baseForm: "pay", pastTense: "paud", pastParticiple: "paud" },
    { baseForm: "put", pastTense: "put", pastParticiple: "put" },
    { baseForm: "run", pastTense: "ran", pastParticiple: "run" },
    { baseForm: "say", pastTense: "said", pastParticiple: "said" },
    { baseForm: "see", pastTense: "saw", pastParticiple: "seen" },
    { baseForm: "sell", pastTense: "sold", pastParticiple: "sold" },
    { baseForm: "send", pastTense: "sent", pastParticiple: "sent" },
    { baseForm: "set", pastTense: "set", pastParticiple: "set" },
    { baseForm: "sit", pastTense: "sat", pastParticiple: "sat" },
    { baseForm: "speak", pastTense: "spoke", pastParticiple: "spoken" },
    { baseForm: "spend", pastTense: "spent", pastParticiple: "spent" },
    { baseForm: "stand", pastTense: "stood", pastParticiple: "stood" },
    { baseForm: "take", pastTense: "took", pastParticiple: "taken" },
    { baseForm: "teach", pastTense: "taught", pastParticiple: "taught" },
    { baseForm: "tell", pastTense: "told", pastParticiple: "told" },
    { baseForm: "think", pastTense: "thought", pastParticiple: "thought" },
    { baseForm: "understand", pastTense: "understood", pastParticiple: "understood" },
    { baseForm: "wear", pastTense: "wore", pastParticiple: "worn" },
    { baseForm: "win", pastTense: "won", pastParticiple: "won" },
    { baseForm: "write", pastTense: "wrote", pastParticiple: "written" },
    
    
];

function generatePastTense() {
    var baseForm = document.getElementById("in1").value.toLowerCase();
    var verb = irregularVerbs.find(function(item) {
        return item.baseForm === baseForm;
    });
    if (verb) {
        document.getElementById("in2").value = verb.pastTense;
    } else {
        document.getElementById("in2").value = "Not found";
    }
}

function generatePastParticiple() {
    var baseForm = document.getElementById("in1").value.toLowerCase();
    var verb = irregularVerbs.find(function(item) {
        return item.baseForm === baseForm;
    });
    if (verb) {
        document.getElementById("in3").value = verb.pastParticiple;
    } else {
        document.getElementById("in3").value = "Not found";
    }
}