import * as tf from '@tensorflow/tfjs';
// @ts-ignore
import * as Meyda from 'meyda';
// @ts-ignore
import Mic from 'node-microphone';
import readline from 'readline';

import { bufferSize, modelName, xSize, dataBasePath } from '../services/constants';
import { MFCC } from '../services/types';

// Carregamos o modelo os pesos são carregados automaticamente
const model = tf.loadLayersModel(`file://${dataBasePath}/${modelName}/model.json`);

console.log('Model loaded');

const input: MFCC[] = [];

const waitInput = () => {
    const inputText = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve =>
        inputText.question('', ans => {
            inputText.close();
            resolve(ans);
        }),
    );
};

const main = async () => {
    let inputText: string = '';
    while (inputText != 'exit') {
        console.log('press enter to start/stop record or type exit to exit');
        inputText = (await waitInput()) as string;
        await record();
    }
};

const record = () => {
    console.log('Recording...');

    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Record end!');
            resolve();
        }, 2000);
    });
};

main();
