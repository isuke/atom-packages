module.exports = {
  selector: ['.source.coffee', '.source.litcoffee'],
  id: 'aligner-coffeescript', // package name
  config: {
    "=-alignment": {
      "title": "Padding for =",
      "description": "Pad left or right of the character",
      "type": "string",
      "default": "left",
      "enum": ["left", "right"]
    },
    "=-leftSpace": {
      "title": "Left space for =",
      "description": "Add 1 whitespace to the left of the character",
      "type": "boolean",
      "default": true
    },
    "=-rightSpace": {
      "title": "Right space for =",
      "description": "Add 1 whitespace to the right of the character",
      "type": "boolean",
      "default": true
    },
    ":-alignment": {
      "title": "Padding for :",
      "description": "Pad left or right of the character",
      "type": "string",
      "default": "right",
      "enum": ["left", "right"]
    },
    ":-leftSpace": {
      "title": "Left space for :",
      "description": "Add 1 whitespace to the left of the character",
      "type": "boolean",
      "default": false
    },
    ":-rightSpace": {
      "title": "Right space for :",
      "description": "Add 1 whitespace to the right of the character",
      "type": "boolean",
      "default": true
    },
    ",-leftSpace": {
      "title": "Left space for ,",
      "description": "Add 1 whitespace to the left of the character",
      "type": "boolean",
      "default": false
    },
    ",-rightSpace": {
      "title": "Right space for ,",
      "description": "Add 1 whitespace to the right of the character",
      "type": "boolean",
      "default": true
    }
  },
  privateConfig: {
    "=-prefixes": ["+", "-", "&", "|", "<", ">", "!", "~", "%", "/", "*", "."],
    "=-scope": "operator",
    ":-scope": "operator|assignment|separator|punctuation",
    ",-scope": "delimiter",
    ",-multiple-number-alignment": "right",
    ",-multiple-string-alignment": "left",
  }
};
