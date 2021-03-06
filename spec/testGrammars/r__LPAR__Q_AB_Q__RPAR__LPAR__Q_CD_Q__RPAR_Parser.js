// jshint ignore: start
var antlr4 = require('antlr4/index');
var r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Listener = require('./r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Listener').r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Listener;
var grammarFileName = "r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0004\b\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0002\u0002\u0003\u0002\u0002\u0002\u0002\u0006\u0002\u0004",
    "\u0003\u0002\u0002\u0002\u0004\u0005\u0007\u0003\u0002\u0002\u0005\u0006",
    "\u0007\u0004\u0002\u0002\u0006\u0003\u0003\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'AB'", "'CD'" ];

var symbolicNames = [  ];

var ruleNames =  [ "r" ];

function r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Parser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Parser.prototype = Object.create(antlr4.Parser.prototype);
r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Parser.prototype.constructor = r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Parser;

Object.defineProperty(r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Parser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Parser.EOF = antlr4.Token.EOF;
r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Parser.T__0 = 1;
r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Parser.T__1 = 2;

r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Parser.RULE_r = 0;

function RContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Parser.RULE_r;
    return this;
}

RContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RContext.prototype.constructor = RContext;


RContext.prototype.enterRule = function(listener) {
    if(listener instanceof r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Listener ) {
        listener.enterR(this);
	}
};

RContext.prototype.exitRule = function(listener) {
    if(listener instanceof r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Listener ) {
        listener.exitR(this);
	}
};




r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Parser.RContext = RContext;

r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Parser.prototype.r = function() {

    var localctx = new RContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Parser.RULE_r);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        this.match(r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Parser.T__0);

        this.state = 3;
        this.match(r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Parser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Parser = r__LPAR__Q_AB_Q__RPAR__LPAR__Q_CD_Q__RPAR_Parser;
