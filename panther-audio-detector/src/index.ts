import * as tf from '@tensorflow/tfjs';

const IMAGE_WIDTH = 100;
const IMAGE_HEIGHT = 25
const IMAGE_CHANNELS =1;


// Cria o modelo
const model = tf.sequential();

model.add(tf.layers.conv2d({
    inputShape: [IMAGE_WIDTH, IMAGE_HEIGHT, IMAGE_CHANNELS],
    kernelSize: 5,
    filters: 8,
    strides: 1,
    activation: 'relu',
    kernelInitializer: 'varianceScaling'
}));


const optimizer = tf.train.adam();
model.compile({
  optimizer: optimizer,
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy'],
});