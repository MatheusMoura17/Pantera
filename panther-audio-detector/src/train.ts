import fs from 'fs-extra';
import '@tensorflow/tfjs-node';

import { IData } from '../services/types';
import { batchSize, epochs, modelName, dataBasePath } from '../services/constants';
import { dataToTensors } from './data';
import { createModel } from './model';

const train = async () => {
    console.log('Reading Data');
    const data: IData = fs.readJSONSync(`${dataBasePath}/data.json`);

    console.log('Converting data to tensors');
    const { xTrain, yTrain, xTest, yTest } = dataToTensors(data);

    console.log('Creating model');
    const model = createModel();
    model.summary();

    console.log('Training model');
    const result = await model.fit(xTrain, yTrain, {
        batchSize,
        epochs,
        validationData: [xTest, yTest],
    });

    console.log(result.history);

    model.save(`file://${dataBasePath}/${modelName}`);
};

train();
