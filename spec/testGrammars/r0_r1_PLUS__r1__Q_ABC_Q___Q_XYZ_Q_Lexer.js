// Generated from /var/folders/jv/52zxxd013cq3x809rg3tqsnw0000gq/T/tmpm45cJC/r0_r1_PLUS__r1__Q_ABC_Q___Q_XYZ_Q_.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0004\u000f\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0002\u0002\u0004\u0003\u0003\u0005\u0004\u0003\u0002",
    "\u0002\u0002\u000e\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0003\u0007\u0003\u0002\u0002\u0002\u0005\u000b\u0003",
    "\u0002\u0002\u0002\u0007\b\u0007C\u0002\u0002\b\t\u0007D\u0002\u0002",
    "\t\n\u0007E\u0002\u0002\n\u0004\u0003\u0002\u0002\u0002\u000b\f\u0007",
    "Z\u0002\u0002\f\r\u0007[\u0002\u0002\r\u000e\u0007\\\u0002\u0002\u000e",
    "\u0006\u0003\u0002\u0002\u0002\u0003\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function r0_r1_PLUS__r1__Q_ABC_Q___Q_XYZ_Q_Lexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

r0_r1_PLUS__r1__Q_ABC_Q___Q_XYZ_Q_Lexer.prototype = Object.create(antlr4.Lexer.prototype);
r0_r1_PLUS__r1__Q_ABC_Q___Q_XYZ_Q_Lexer.prototype.constructor = r0_r1_PLUS__r1__Q_ABC_Q___Q_XYZ_Q_Lexer;

r0_r1_PLUS__r1__Q_ABC_Q___Q_XYZ_Q_Lexer.EOF = antlr4.Token.EOF;
r0_r1_PLUS__r1__Q_ABC_Q___Q_XYZ_Q_Lexer.T__0 = 1;
r0_r1_PLUS__r1__Q_ABC_Q___Q_XYZ_Q_Lexer.T__1 = 2;

r0_r1_PLUS__r1__Q_ABC_Q___Q_XYZ_Q_Lexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

r0_r1_PLUS__r1__Q_ABC_Q___Q_XYZ_Q_Lexer.prototype.modeNames = [ "DEFAULT_MODE" ];

r0_r1_PLUS__r1__Q_ABC_Q___Q_XYZ_Q_Lexer.prototype.literalNames = [ null, 
                                                                   "'ABC'", 
                                                                   "'XYZ'" ];

r0_r1_PLUS__r1__Q_ABC_Q___Q_XYZ_Q_Lexer.prototype.symbolicNames = [  ];

r0_r1_PLUS__r1__Q_ABC_Q___Q_XYZ_Q_Lexer.prototype.ruleNames = [ "T__0", 
                                                                "T__1" ];

r0_r1_PLUS__r1__Q_ABC_Q___Q_XYZ_Q_Lexer.prototype.grammarFileName = "r0_r1_PLUS__r1__Q_ABC_Q___Q_XYZ_Q_.g4";



exports.r0_r1_PLUS__r1__Q_ABC_Q___Q_XYZ_Q_Lexer = r0_r1_PLUS__r1__Q_ABC_Q___Q_XYZ_Q_Lexer;

Object.defineProperty(r0_r1_PLUS__r1__Q_ABC_Q___Q_XYZ_Q_Lexer.prototype, "atn", {
	get : function() {
		return atn;
	}
});

