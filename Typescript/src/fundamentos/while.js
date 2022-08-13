"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let option = '';
let menu = `
1 - Imprimir Olá.
2 - Imprimir Mundo.
3 - Imprimir Olá Mundo.
Sair - Sair do programa.
`;
while (option !== 'Sair') {
    rl.question(menu, (answer) => {
        switch (answer) {
            case '1':
                console.log('Olá\n');
                break;
            case '2':
                console.log('Mundo\n');
                break;
            case '3':
                console.log('Olá Mundo\n');
                break;
            case 'Sair':
                console.log('Bye Bye\n');
                option = 'Sair';
                break;
            default:
                console.log('Opção Inválida!\n');
                break;
        }
        rl.close();
    });
}
